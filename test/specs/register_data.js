const HOST = 'https://stage.pasv.us';


const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const email = Math.random()+ 'ara8977@gmail.com';
const user = {
    firstName : 'Artur',
    lastName : 'Badmaev',
    password :'11111',
    phone : '14285634878',
    email,
    about : 'gdgdgdggdg gdgdgdgd hhujnnhhjj',
    goals : 'bbbbbb gfgfg fghfhfhfh',
    englishLevel : 'Beginner',
};

const pageRegisterSelectors ={
    h1: 'h1',
    description : 'p',
    submitButton : 'form button[type="submit"]',
    firstNameInput : 'form input[name="firstName"]',
    lastNameInput : 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]',
    emailInput : 'form input[name="email"]',
    passwordInput : 'form input[name="password"]',
    aboutInput : 'form textarea[name="about"]',
    goalsInput :'form textarea[name="goals"]',
    englishLevelInput :'form select[name="englishLevel"]',
}

const pageRegister = {
    title :  'Progress Monitor',
    h1 : 'User Register',
    description :  'Profiles with fictitious or dummy data will be deleted.',
    buttonText : 'Submit',
};

const pageLogin = {
    title :  'Progress Monitor',
    h1 : 'User Login',
};

const pageConfirmation = {
    h1 : 'You are a new user',
};

module.exports = {URL_REGISTER, URL_LOGIN, user, pageRegisterSelectors,pageRegister,pageLogin, pageConfirmation};