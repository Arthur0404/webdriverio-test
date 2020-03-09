import {expect} from 'chai';
import HomePage from "../../_page/HomePage";
import loginPage from "../../_page/loginPage";
import Notification from "../../_page/Notification";
import Menu from "../../_page/Menu";
import ResetPasswordPage from "../_page/ResetPasswordPage";
import CheckEmailPage from "../../_page/CheckEmailPage";
import {testEmails, pagePswRecovery} from "../_data/recoveryPassword.data";

 describe('USER PASSWORD RECOVERY', () => {
         before('open Login page from Homepage',() => {
           HomePage.open();
           HomePage.loginLink.click();
         });

           it('should title', () => {
             const actual =  Menu.h1.getText();
             const expected = 'User Login';
             expect(actual).eq(expected);
           });

         it('should check is Forgot password link is displayed', () => {
           expect(loginPage.forgotPasswordLink.getText()).eq(pagePswRecovery.forgotLinkTxt);
         });

         it('should click Forgot password link and user redirected to Reset your password page', () => {
           loginPage.forgotPasswordLink.click();
         });

         it('should title Reset your password', () => {
           const actual = ResetPasswordPage.h1.getText();
           const  expected = pagePswRecovery.h1;
           expect(actual).eq(expected);
         });

         it('should check if the button `Send password reset email` is displayed', () => {
           ResetPasswordPage.submitBTN.waitForDisplayed(100);
         });

         it('should check if `Required` message is displayed for empty Email field', () => {
          browser.$(ResetPasswordPage.emailInput).clearValue();
         });

         it('should check if `Required` message is displayed for empty Email field', () => {
           browser.$(ResetPasswordPage.requireMSG).isDisplayed();
         });

          it('should check if the button is not clickable if email field is empty', () => {
            expect(ResetPasswordPage.submitBTN.isEnabled()).false;
          });

          it('should check if `Send password reset email` button is not clickable with incorrect email', () => {
            ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
          });

          it ('should check if `Send password reset email` button is not clickable with incorrect email', () => {
            browser.$(ResetPasswordPage.submitBTN).isClickable();
          });

          it('should check if `Invalid email address` warning is displayed with incorrect email', () => {
            ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
            Notification.invalidMsg.waitForDisplayed(500);
          });

          it('should check if `Send password reset email` button is clickable with correct email', () => {
            ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
          });

           it('should check if `Send password reset email` button is clickable with correct email', () => {
             ResetPasswordPage.submitBTN.isClickable();
           });

           it('should check failed message `User not found` appears if entered email is not found in the database', () => {
             ResetPasswordPage.emailInput.setValue(testEmails.notRegistered);
             ResetPasswordPage.submitBTN.click();
           });

           it('should check failed message `User not found` appears if entered email is not found in the database', () => {
             const actual = Notification.title.getText();
             const expected = pagePswRecovery.failedMsgTxt;
             expect(actual).eq(expected);
           });

           it('should check that user is left on the same page if email is not in the database', () => {
             expect(ResetPasswordPage.h1.getText()).eq(pagePswRecovery.h1);
           });

           it('should check that user gets redirected to `CheckMail` page with correct email', () => {
             ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
           });

           it('should check that user gets redirected to `CheckMail` page with correct email', () => {
             ResetPasswordPage.submitBTN.click();
             browser.pause(5000);
           });

           it('should check that user gets redirected to `CheckMail` page with correct email', () => {
             const actual = browser.getUrl();
             const expected = pagePswRecovery.urlRedirect;
             expect(actual).eq(expected);
           });

           it('should success message be displayed', () => {
             CheckEmailPage.successMSG.waitForDisplayed(1000);
           });

           it('should check if header of the `CheckEmailPage` is correct', () => {
             expect(CheckEmailPage.h1.getText()).eq(pagePswRecovery.h1Redirect);
           });

           it('should `Try again` link be displayed', () => {
             CheckEmailPage.tryAgainLink.waitForDisplayed();
           });

           it('should check `Try again` link redirects to `Forgot Password` page', () => {
             CheckEmailPage.tryAgainLink.click();
           });

           it('should check `Try again` link redirects to `Forgot Password` page', () => {
            const actual = browser.getUrl();
            const expected = pagePswRecovery.urlResetPsw;
            expect(actual).eq(expected);
            browser.pause(5000);
           });
 });