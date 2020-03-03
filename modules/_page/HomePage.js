import AppPage from "./AppPage";

class HomePage extends AppPage {

  get h1(){
    return browser.$('//h1');
  }

  get title(){
    return browser.$('//div[@class="container"]//span[@id="site-name"]');
  }

  get loginLink(){
    return browser.$('//a[@qa="login-link"]');
  }

  open() {
    super.open('https://stage.pasv.us/');
  }

  get registrationLink(){
    return browser.$('//a[@qa="register-link"]');
  }

}

export default new HomePage();