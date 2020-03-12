import AppPage from "./AppPage";
import {newUserData} from "../_data/registration.data";
import {userRegisterData} from "../_data/userAlreadyRegistreted.data";
import Notification from "./Notification";

  class RegistrationPage extends AppPage {
    get h1() {
      return browser.$('//h1');
    }
    get warningAboutFictionsProfile() {
      return browser.$('//p');
    }

    get firstNameInput() {
      return browser.$('//form//input[@name="firstName"]');
    }

    get lastNameInput() {
      return browser.$('//form//input[@name="lastName"]');
    }

    get cellPhoneNumberInput() {
      return browser.$('//form//input[@name="phone"]');
    }

    get emailInput() {
      return browser.$('//form//input[@name="email"]');
    }

    get passwordInput() {
      return browser.$('//form//input[@name="password"]');
    }

    get aboutInput() {
      return browser.$('//form//textarea[@name="about"]');
    }

    get myGoalsInput() {
      return browser.$('//form//textarea[@name="goals"]');
    }

    get englishLevelOption() {
      return browser.$('//form//select[@name="englishLevel"]');
    }

    get submitBTN() {
      return browser.$('//form//button[@type="submit"]');
    }

    registrationNewUser() {
      this.firstNameInput.setValue(newUserData.firstName);
      this.lastNameInput.setValue(newUserData.lastName);
      this.cellPhoneNumberInput.setValue(newUserData.phone);
      this.emailInput.setValue(newUserData.email);
      this.passwordInput.setValue(newUserData.password);
      this.aboutInput.setValue(newUserData.about);
      this.myGoalsInput.setValue(newUserData.goals);
      this.englishLevelOption.selectByVisibleText(newUserData.englishLevel);
      this.submitBTN.click();
      browser.waitUntil(() => this.h1.isDisplayed());

    }

    registrationUserAlreadyExist() {
      this.firstNameInput.setValue(newUserData.firstName);
      this.lastNameInput.setValue(newUserData.lastName);
      this.cellPhoneNumberInput.setValue(newUserData.phone);
      this.emailInput.setValue(newUserData.email);
      this.passwordInput.setValue(newUserData.password);
      this.aboutInput.setValue(newUserData.about);
      this.myGoalsInput.setValue(newUserData.goals);
      this.englishLevelOption.selectByVisibleText(newUserData.englishLevel);
      this.submitBTN.click();
      browser.waitUntil(() => {
        return Notification.title.getText() === userRegisterData.notification
      });
    }
  }

  export default new RegistrationPage();