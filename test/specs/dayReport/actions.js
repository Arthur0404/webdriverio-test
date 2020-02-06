const HOST = 'https://stage.pasv.us';
const URL_LOGIN = `${HOST}/user/login`;
const URL_REPORT = `${HOST}/diary/create`;

const pageLoginSelectors = {
    h1: '//h1',
    submitButton: '//button[@type="submit"]',
    emailInput: '//form//input[@name="email"]',
    passwordInput: '//form//input[@name="password"]',
};

function loginAsAdmin (){
    browser.url(URL_LOGIN);
    const element1 = browser.$(pageLoginSelectors.emailInput);
    element1.setValue('admin@test.com');
    browser.$(pageLoginSelectors.passwordInput).setValue('11111');
    browser.$(pageLoginSelectors.submitButton).click();
    browser.pause(1000);

};
function logOut (){
    browser.$('//a[@class="dropdown-toggle nav-link"]').click();
    browser.$('//button[contains(text(), "logout")]').click();
    browser.pause(1000);

};


module.exports =  {loginAsAdmin,logOut, URL_REPORT};