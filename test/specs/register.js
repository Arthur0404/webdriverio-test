const { expect } = require ('chai');

const email = Math.random()+ 'ara8977@gmail.com';
const password = '11111';




describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/register')
    });
    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor'
        expect(actualTitle).equal(expectedTitle);
        browser.pause(2000)
    })
    it('should have a correct title ',  () => {
        const actual = $('h1').getText();
        const expected = 'User Register';
       expect(actual).equal(expected);
        browser.pause(2000)
    });
    it('should have a correct description ',  () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
        browser.pause(2000)
    });
    it('should have a correct submit button text ',  () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
        browser.pause(2000)
    });
    it('should fill First Name field',  () => {
        const element = $('form input[name="firstName"]');
        element.setValue('Artur');
        browser.pause(2000)
    });
    it('should fill last Name field',  () => {
        const element = $('form input[name="lastName"]');
        element.setValue('Badmaev');
        browser.pause(2000)
    });
    it('should fill phone num  field',  () => {
        const element = $('form input[name="phone"]');
        element.setValue('17452364523');
        browser.pause(2000)
    });
    it('should fill email  field',  () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(2000)
    });
    it('should fill password  field',  () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(2000)
    });
    it('should fill about field',  () => {
        const element = $('form textarea[name="about"]');
        element.setValue('fdgdhdksi gdgdgdg dhdhdhd');
        browser.pause(2000)
    });
    it('should fill my goals field',  () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('bbbbbb gfgfg fghfhfhfh');
        browser.pause(2000)
    });
    it('should fill English level field',  () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Beginner');
        browser.pause(2000)
    });
    it('should choose click button',  () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000)
    });

    /*---------------------------------------------------*/

    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = 'User Login';
        expect(actual).equal(expected);
    });
    it('should fill up email  field',  () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(2000)
    });
    it('should fill password  field',  () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(2000)
    });
    it('should choose click button',  () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000)
    });
});



