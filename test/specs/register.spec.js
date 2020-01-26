const { expect } = require ('chai');
const {URL_REGISTER, URL_LOGIN,user, pageRegisterSelectors,pageRegister,pageLogin, pageConfirmation} = require('./register_data');

describe('Register page', () => {
    before(() => {
        browser.url(URL_REGISTER)
    });
    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        expect(actualTitle).equal(pageRegister.title);

    })
    it('should hav a correct title ',  () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = pageRegister.h1;
       expect(actual).equal(expected);

    });
    it('should have a correct description ',  () => {
        const actual = $(pageRegisterSelectors.description).getText();
        const expected = pageRegister.description;
        expect(actual).equal(expected);

    });
    it('should have a correct submit button text ',  () => {
        const actual = $(pageRegisterSelectors.submitButton).getText();
        const expected = pageRegister.buttonText;
        expect(actual).equal(expected);

    });
    it('should fill First Name field',  () => {
        const element = $(pageRegisterSelectors.firstNameInput);
        element.setValue(user.firstName);

    });
    it('should fill last Name field',  () => {
        const element = $(pageRegisterSelectors.lastNameInput);
        element.setValue(user.lastName);

    });
    it('should fill phone num  field',  () => {
        const element = $(pageRegisterSelectors.phoneInput);
        element.setValue(user.phone);

    });
    it('should fill email  field',  () => {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(user.email);

    });
    it('should fill password  field',  () => {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(user.password);

    });
    it('should fill about field',  () => {
        const element = $(pageRegisterSelectors.aboutInput);
        element.setValue(user.about);

    });
    it('should fill my goals field',  () => {
        const element = $(pageRegisterSelectors.goalsInput);
        element.setValue(user.goals);

    });
    it('should fill English level field',  () => {
        const element = $(pageRegisterSelectors.englishLevelInput);
        element.selectByVisibleText(user.englishLevel);

    });
    it('should  click Submit button',  () => {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(2000)
    });
});

    /*---------------------------------------------------*/
    describe('User login', () => {
        it('should have the rigth title', () => {
            browser.url(URL_LOGIN);
            const actualTitle = browser.getTitle();
            const expectedTitle = pageLogin.title;
            expect(actualTitle).equal(expectedTitle);
        });

    it('should have a correct title', () => {
        const actualH1Text = $('h1').getText();
        const expectedH2Text = pageLogin.h1;
        expect(actualH1Text).equal(expectedH2Text);
    });
    it('should fill up email  field',  () => {
        const element = $('form input[name="email"]');
        element.setValue(user.email);

    });
    it('should fill password  field',  () => {
        const element = $('form input[name="password"]');
        element.setValue(user.password);

    });
    it('should click login button',  () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(1000)
    });
});

    /*------------------------------------------------*/
 describe('Confirmation register page', () => {
    it('should have a correct title', () => {
        const actualH1Text = $('h1').getText();
        const expectedH1Text = pageConfirmation.h1;
        expect(actualH1Text).equal(expectedH1Text);
        browser.pause(2000);
    });

});





