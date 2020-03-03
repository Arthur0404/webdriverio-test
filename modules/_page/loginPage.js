import AppPage from "./AppPage";

class loginPage extends AppPage {

    get h1(){
      return browser.$('//h1');
    }

    get emailInput (){
      return browser.$('//input[@name="email"]');
    }

    get passwordInput(){
      return browser.$('//input[@name="password"]');
    }

    get forgotPasswordLink(){
      return browser.$('//a[@qa="forgot-password-link"]');
    }

    get submitBTN(){
      return browser.$('//button[@type="submit"]');
    }

    get bullets(){
      return browser.$('//input[@name="password"][@autocomplete="current-password"]');
    }

    get notification (){
      return browser.$('//h4[@class="notification-title"]');
    }

    login(role){
      this.open();
      this.emailInput.setValue(role.email);
      this.passwordInput.setValue(role.password);
      this.submitBTN.click();
      browser.pause(2000);
    }
    open() {
      super.open('https://stage.pasv.us/user/login');
    }
}

export default new loginPage();