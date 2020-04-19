import AppPage from "./AppPage";
import {newUser} from "../_data/userRegistration.data";
import mainPage from "./mainPage";

  class RegistrationPage extends AppPage {

    get firstNameInput() {
      return browser.$('[name="firstName"]');
    }

    get lastNameInput() {
      return browser.$('[name="lastName"]');
    }

    get cellPhoneNumberInput() {
      return browser.$('[name="phone"]');
    }

    get emailInput() {
      return browser.$('[name="email"]');
    }

    get passwordInput() {
      return browser.$('[name="password"]');
    }

    get aboutInput() {
      return browser.$('[name="about"]');
    }

    get myGoalsInput() {
      return browser.$('[name="goals"]');
    }

    get countryOption(){
      return browser.$('[name="countryName"');
    }

    get englishLevelOption() {
      return browser.$('[name="englishLevel"]');
    }

    get submitBTN() {
      return browser.$('[type="submit"]');
    }

    open() {
      super.open('https://stage.pasv.us/user/register');
    }

    get requiredFieldList(){
      return browser.$$('.invalid-feedback');
    }

    get invalidInputMsg(){
      return browser.$('//div[@class="invalid-feedback"]')
    }

    get warningRedFrameList(){
      return browser.$$('.is-invalid')
    }

    // method for create new user
    registerNewUser() {
      this.firstNameInput.setValue(newUser.firstName);
      this.lastNameInput.setValue(newUser.lastName);
      this.cellPhoneNumberInput.setValue(newUser.phone);
      this.emailInput.setValue(newUser.email);
      this.passwordInput.setValue(newUser.password);
      this.aboutInput.setValue(newUser.about);
      this.myGoalsInput.setValue(newUser.goals);
      this.countryOption.selectByVisibleText(newUser.country);
      this.englishLevelOption.selectByVisibleText(newUser.englishLevel);
      mainPage.smartClick(this. submitBTN);
    }
    verifyFieldHigtligthInRed(index){
      mainPage.header.click();
      browser.waitUntil(() => this.warningRedFrameList[index].isDisplayed() === true,
        5000, `Field index[${index}] did't highligth in red`);
       }
  }

  export default new RegistrationPage();