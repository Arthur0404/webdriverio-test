const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const URL_ADMIN_LOGIN = `${HOST}/diary`;
const URL_DIARY = `${HOST}/diary/create`;

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
    moraleLevelInput : 'form select[name="morale"]',
    hoursInput: 'form input[name="hours"]',
    howWasYourDay: 'form textarea[name="description"]',
    dailyReportInput: 'form input[label="Watched lectures"]',
    dailyReportInput1: 'form input[label="I understood everything"]',
    dailyReportInput2: 'form input[label="Read documentation"]',
    dailyReportInput3: 'form input[label="I need help"]',

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
    h1: 'You are a new user',
};

const adminDialyReports = {
    title: 'Progress Monitor',
    h1 : 'Artur Badmaev',
};
const pageDiaryCreate = {
    h1: 'Create day report',
    morale: '10 – I am pleased with everything!',
    hours: '10',
    description: 'Сегодня проделал большую работу',
};

module.exports = {URL_REGISTER, URL_LOGIN, URL_ADMIN_LOGIN, URL_DIARY, user, pageRegisterSelectors,pageRegister,pageLogin, pageConfirmation, adminDialyReports, pageDiaryCreate,};