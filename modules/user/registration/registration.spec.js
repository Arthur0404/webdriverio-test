import RegistrationPage from "../../_page/RegistrationPage";
import HomePage from "../../_page/HomePage";
import Notification from "../../_page/Notification";
import {newUserData, pageRegisterData, successfulNotificationData} from "../../_data/registration.data";
import {expect} from "chai";
import axios from 'axios';

 describe('USER REGISTRATION', () => {
       before('should open Home Page, click button `Registration` ' +
         'and redirect to Registration Page', () => {
         HomePage.open();
         HomePage.registrationLink.click();
         browser.pause(1000);
       });

       it('should registration page has correct header', () => {
         const actual = RegistrationPage.h1.getText();
         const expected = pageRegisterData.h1;
         expect(actual).eq(expected);
       });

       it('should have correct warning text', () => {
         const actual = RegistrationPage.warningAboutFictionsProfile.getText();
         const expected = pageRegisterData.warningText;
         expect(actual).eq(expected);
       });

       it('should button `Submit will be disabled by default`', () => {
          const element = RegistrationPage.submitBTN;
          expect(element.isEnabled()).to.be.false;
       });

       it('should fill out `First Name` field', () => {
        const actual = browser.$(RegistrationPage.firstNameInput).isDisplayed();
        expect(actual).to.be.true;
       });

        it('should fill out `First Name` field', () =>{
          RegistrationPage.firstNameInput.setValue(newUserData.firstName);
        });

        it('should fill out `Last Name` field', () => {
          const actual = browser.$(RegistrationPage.lastNameInput).isDisplayed();
          expect(actual).to.be.true;
       });

        it('should fill out `Last Name` field', () => {
          RegistrationPage.lastNameInput.setValue(newUserData.lastName);
        });

        it('should fill out `Cell Phone Number` field', () => {
          const actual = browser.$(RegistrationPage.cellPhoneNumberInput).isDisplayed();
          expect(actual).to.be.true;
        });

        it('should fill out `Cell Phone Number` field', () => {
          RegistrationPage.cellPhoneNumberInput.setValue(newUserData.phone);
        });

        it('should fill out `Email` field', () => {
          const actual = browser.$(RegistrationPage.emailInput).isDisplayed();
          expect(actual).to.be.true;
        });

        it('should fill out `Email` field', () => {
          RegistrationPage.emailInput.setValue(newUserData.email);
        });


         it('should button `Submit` will be disabled without filling out last requierd field', () => {
           const element = RegistrationPage.submitBTN;
           expect(element.isEnabled()).to.be.false;
         });

         it('should fill out Password field', ()=> {
           const actual = browser.$(RegistrationPage.passwordInput).isDisplayed();
           expect(actual).to.be.true;
         });

         it('should fill out Password field', () => {
           RegistrationPage.passwordInput.setValue(newUserData.password);
         });

         it('should fill out About field', () => {
           const actual = browser.$(RegistrationPage.aboutInput).isDisplayed();
           expect(actual).to.be.true;
         })

          it('should fill out About field', () => {
            RegistrationPage.aboutInput.setValue(newUserData.about);
          });

         it('should fill out My goals field', () => {
           const actual = browser.$(RegistrationPage.myGoalsInput).isDisplayed();
           expect(actual).to.be.true;
         });

         it('should fill out My goals field', () => {
           RegistrationPage.myGoalsInput.setValue(newUserData.goals);
         });

         it('should choose English level from dropdown menu', () => {
           const actual = browser.$(RegistrationPage.englishLevelOption).isDisplayed();
           expect(actual).to.be.true;
         });

         it('should choose English level from dropdown menu', () => {
           RegistrationPage.englishLevelOption.selectByVisibleText(newUserData.englishLevel);
         });

         it('should button `Submit` will be disabled without filling out last requierd field', () => {
           const element = RegistrationPage.submitBTN;
           expect(element.isEnabled()).to.be.true;
         });

         it('should click button Submit after filling all fields', () => {
           RegistrationPage.submitBTN.click();
           browser.pause(3000);
         });

          it('should get successful notification about user registration in the system', () => {
            const action = Notification.title.getText();
            const expected = successfulNotificationData.successfulNotification;
            expect(action).eq(expected);
          });

         it('should verify from DB user by email', async () => {
           const response = await axios({
             method: 'get',
             url: `https://server-stage.pasv.us/user/email/${newUserData.email}`,
             headers: {
               Authorization: process.env.ADMIN_TOKEN,
             },

           })
             .then(res => res)
             .catch(err => err);
           expect(response.status).eq(200);
           expect(response.data.payload.name).eq(`${newUserData.firstName} ${newUserData.lastName}`);
         });
     });