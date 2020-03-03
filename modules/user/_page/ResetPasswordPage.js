import AppPage from "../../_page/AppPage";

class ResetPasswordPage extends AppPage {

  get h1(){
    return browser.$('//h1');
  }

  get submitBTN(){
    return browser.$('//button[@type="submit"]');
  }

  get emailInput(){
    return browser.$('//input[@name="email"]');
  }

  get requireMSG(){
    return browser.$('//span[contains(text(), "Required")]');
  }
  open(path){
    super.open('https://stage.pasv.us/user/password/reset/request')
  }
}

export default new ResetPasswordPage();