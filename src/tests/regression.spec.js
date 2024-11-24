const { test, expect } = require('@playwright/test');
const PageObjectManager = require('../pages/PageObjectManager');
const generateOTP= require('../utils/generateOTP');
const CONSTANTS = require('../utils/constants');


test.describe('Regressions tests', () => {
    let page;
    let pom;
    const username = process.env.UI_USER_NAME;
    const password = process.env.UI_USER_PASSWORD;
  
    test.beforeAll(async ({ browser }) => {
      // Initialize the browser, context, and page
      const context = await browser.newContext();
      page = await context.newPage();
  
      // Initialize the PageObjectManager
      pom = new PageObjectManager(page);
    });
  
    test.afterAll(async () => {
      await page.close();
    });
  
    test.only('should login successfully', async () => {
      const obj = new generateOTP();
      const loginpage = pom.getLoginPage();
      const landingpage = pom.getLandingPage();

      const otp = obj.generateOTPAuth();  
      console.log("OTP:"+otp);   
      await loginpage.gotoUrl();
      await loginpage.clickADbtn();
      await loginpage.fillUsername(`${username}`);
      await loginpage.clicknextBtn();
      await loginpage.fillPassword(`${password}`);
      await loginpage.clickSignIntBtn();
      await loginpage.fillOtp(otp);
      await loginpage.clickContinueBtn();
      const pagetitle =await landingpage.getPageTitle();
      expect(pagetitle.includes(CONSTANTS.PAGETITLE)).toBe(true);      
    });
});