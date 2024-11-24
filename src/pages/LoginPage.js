class LoginPage{

constructor(page){
    this.page=page;
    this.signADBtn= this.page.locator('.button');
    this.username =this.page.locator('#i0116');
    this.nextbtn= this.page.locator('#idSIButton9');
    this.password = this.page.locator('#i0118');
    this.signInBtn = this.page.locator('input[value="Sign in"]');
    this.otpTxt =this.page.locator('#idTxtBx_SAOTCC_OTC');
    this.continueBtn= this.page.locator('#idSubmit_SAOTCC_Continue');
    this.passwordErr= this.page.locator('#passwordError');
}

async gotoUrl(){
    await this.page.goto("https://qa-dahu.elancoapps.com/");
}

async clickADbtn(){
    await this.signADBtn.click();
}
async fillUsername(username){
    await this.username.fill(username);
}

async clicknextBtn(){
    await this.nextbtn.click();
}

async fillPassword(password){
    await this.password.fill(password);
}

async clickSignIntBtn(){
    await this.signInBtn.click();
}

async fillOtp(otp){
    await this.otpTxt.fill(otp);
}

async clickContinueBtn(){
    await this.continueBtn.click();
}

async getpasswordError(){
   return await this.passwordErr.textContent();
}
}

module.exports= {LoginPage}