class LogoutPage {

  get LogoutDropDown(){
    return browser.$('//a[@class="dropdown-toggle nav-link"]');
  }

  get LogoutBTN(){
    return browser.$('//button[contains(text(), "Logout")]');
  }

  Logout(){
    this.LogoutDropDown.click();
    this.LogoutBTN.click();
  }
}

export default new LogoutPage();