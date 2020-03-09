import { expect } from 'chai';
import loginPage from "../../_page/loginPage";
import Menu from "../../_page/Menu";
import HomePage from "../../_page/HomePage";
import { student } from "../../_data/user_data";
import {newUserData} from "../../_data/registration.data";
import axios from 'axios';

 describe('LOGIN PAGE --POSITIVE', () => {
         before(() => {
           HomePage.open();
           HomePage.loginLink.click();
         });

         it('should wait correct Login Page title', () => {
           const actual = loginPage.h1.getText();
           const expected = 'User Login';
           expect(actual).eq(expected);
         });

         it('should fill out email field', () => {
           loginPage.emailInput.setValue(student.email);
         });

         it('should fill password field', () => {
           loginPage.passwordInput.setValue(student.password);
         });

         it('should check password field hide with bullets', () => {
           const actual = loginPage.passwordInput.getAttribute('type');
           const expected = 'password';
           expect(actual).eq(expected);
         });

         it('should click Login button', () => {
           loginPage.submitBTN.click();
           browser.pause(5000);
         });

         it('should check transfer to Profile Page', () => {
           const actual = Menu.h1.getText();
           const expected = 'Student PASV';
           expect(actual).eq(expected);
         });

         it('should get positive login notification', ()=> {
           const actual = loginPage.notification.getText();
           const expected = 'Completed challenges';
           expect(actual).eq(expected, 'Why "Completed challenges" ?');
         });
     });