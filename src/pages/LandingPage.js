class LandingPage{
constructor(page){
    this.page=page;
    this.landingPageTitle=this.page.locator('.text-lg.font-semibold');
    this.uploadbtn= this.page.locator('#headlessui-menu-button-\\:Rud6\\:');
    this.searchInput=this.page.locator('input[placeholder="Search..."]');
    this.clicksearch=this.page.locator('.absolute');
    
}

 async getPageTitle() {
  return await this.landingPageTitle.textContent();
}
  
 async search(studyname) {
     return await this.searchInput.fill(studyname);
 }
 async clickSearch() {
    //return await this.clicksearch.click();
    try {
        await this.clicksearch.first().click();
      } catch (error) {
        console.error('Error clicking search:', error);
        // Handle the error, e.g., retry the action or log the error for debugging
      }
}
}

module.exports ={LandingPage};