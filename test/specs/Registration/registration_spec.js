import { expect } from 'chai';
import RegistrationPage from "./RegistrationPage";
import LoginPage from "../login/LoginPage";


describe('User Register', function () {
    it('should open user register', () => {
        RegistrationPage.open();
    });

    it('should have correct title ', () => {
        const actual = RegistrationPage.h1.getText();
        const expected = 'User Register';
        expect(actual).eq(expected);
    });

    it('should have a correct description ',  () => {
       expect(RegistrationPage.description.getText()).eq('Profiles with fictitious or dummy data will be deleted.');
    });

    it('should fill First Name field', () => {
      const actual = browser.$(RegistrationPage.fistName).isDisplayed();
      expect(actual).to.be.true;
    });

    it('should fill First Name field', () => {
        RegistrationPage.fistName.setValue('Artur');
    });

    it('should fill Last Name field', () => {
        const actual = browser.$(RegistrationPage.lastName).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should fill Last Name field', () => {
        RegistrationPage.lastName.setValue('Badmaev');
    });

    it('should fill phone num  field', () => {
        const actual = browser.$(RegistrationPage. phone).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should fill phone num  field', () => {
        RegistrationPage.phone.setValue('14285634878');
    });

    it('should fill email  field', () => {
        const actual = browser.$(RegistrationPage.email).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should fill email  field', () => {
        RegistrationPage.email.setValue(Math.random() + 'aa8977@gmail.com');
    });

    it('should fill password  field', () => {
        const actual = browser.$(RegistrationPage.password).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should fill password  field', () => {
        RegistrationPage.password.setValue('11111');
    });

    it('should fill about field', () => {
        const actual = browser.$(RegistrationPage.about).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should fill about field', () => {
        RegistrationPage.about.setValue('ffdfdfd hyggd njjkku yfgfgfvfvdvd bhfyfyf ffjfmf');
    });

    it('should fill my goals field', () => {
            const actual = browser.$(RegistrationPage.goals).isDisplayed();
            expect(actual).to.be.true;
    });

    it('should fill my goals field', () => {
        RegistrationPage.goals.setValue('ffdfdfd hyggd njjkku yfgfgfvfvdvd bhfyfyf ffjfmf');
    });

    it('should fill English level field', () => {
            const actual = browser.$(RegistrationPage.english).isDisplayed();
            expect(actual).to.be.true;
    });

    it('should fill English level field', () => {
        RegistrationPage.english.selectByVisibleText('Beginner');
    });

    it('should  click Submit button', () => {
            const actual = browser.$(RegistrationPage.submitBTN).isDisplayed();
            expect(actual).to.be.true;
            RegistrationPage.submitBTN.click();
            browser.pause(5000);
    });
});
/*--------------------------------*/
describe('User Login', () => {
    it('should have correct title ', ()=> {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it('should fill out email field', () => {
        RegistrationPage.email.setValue( 'admin@test.com');
    });

    it('should fill uot password field', () => {
        RegistrationPage.password.setValue('11111');
    });

    it('should submit form', () => {
        LoginPage.submitBTN.click();
        browser.pause(5000);
    });
});



