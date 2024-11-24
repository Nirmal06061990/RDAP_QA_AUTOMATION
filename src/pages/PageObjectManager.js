const {LandingPage} = require('../pages/LandingPage');
const {LoginPage} = require('../pages/LoginPage');

class PageObjectManager{

    constructor(page){
        this.page=page;
        this.loginPage = new LoginPage(this.page);
        this.landingPage= new LandingPage(this.page);
    }

    getLoginPage(){
    return this.loginPage;
    }

    getLandingPage(){
        return this.landingPage;
    }
}

module.exports = PageObjectManager;