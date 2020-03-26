import RegistrationPage from "../../_page/RegistrationPage";
import HomePage from "../../_page/HomePage";

 describe('REGISTRATION PAGE--NEGATIVE with already registered user in the system', () => {
         it('should open Home Page, click button `Registration `' +
           'and redirect to Registration Page ', () => {
            HomePage.open();
            HomePage.registrationLink.click();
         });
         it('should already registered user fill out all fields and submit registration form' +
           'and get notification `User with this e-mail exists`',() => {
           RegistrationPage.registrationUserAlreadyExist();
   });

     });

