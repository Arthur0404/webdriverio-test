import RegistrationPage from "../../_page/RegistrationPage";
import Notification from "../../_page/Notification";
import {H1RegisterPage} from "../../_data/userRegistration.data";
import mainPage from "../../_page/mainPage";

 describe('NEW USER REGISTRATION -- DUPLICATE REGISTRATION ', () => {
         before('Open register page, register new user, confirm user created ', () => {
            RegistrationPage.open();
            mainPage.verifyElementText(mainPage.header, H1RegisterPage);
            RegistrationPage.registerNewUser();
            Notification.successMsgDisplayed();
         });

         it('should open registration page', () => {
           RegistrationPage.open();
         });
         it('should register user with same data', () => {
           RegistrationPage.registerNewUser();
         });
         it('verify fail message', () => {
           Notification.failMsgDisplayed();
         });
         it('should verify user still register page' , () => {
           mainPage.verifyElementText(mainPage.header, H1RegisterPage);
         });
     });

