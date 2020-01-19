const { expect } = require ('chai');
const {URL_LOGIN} = require ('./register_data');

describe('login as admin', () => {
it('should have the rigth title', () => {
    browser.url(URL_LOGIN);
    $('form input[name="email"]').setValue('admin@test.com');
    $('form input[name="password"]').setValue('11111');
    $('form button[type="submit"]').click();
    browser.pause(5000);
    });
});


