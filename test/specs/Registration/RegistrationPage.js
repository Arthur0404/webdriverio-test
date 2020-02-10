import Page from "../Page";

class RegistrationPage extends Page {

    get fistName (){
        return browser.$('//form//input[@name="firstName"]');
    }

    get lastName () {
        return browser.$('//form//input[@name="lastName"]');
    }

    get h1 () {
        return browser.$('//h1');
    }

    get description () {
        return browser.$('//p');
    }

    get phone(){
        return browser.$('//form//input[@name="phone"]');
    }

    get email (){
        return  browser.$('//form//input[@name="email"]');
    }

    get password (){
        return browser.$('//form//input[@name="password"]');
    }

    get about (){
        return browser.$('//form//textarea[@name="about"]');
    }

    get goals () {
        return browser.$('//form//textarea[@name="goals"]');
    }

    get english () {
        return browser.$('//form//select[@name="englishLevel"]');
    }

    get submitBTN (){
        return browser.$('//form//button[@type="submit"]');
    }

    open() {
        super.open('https://stage.pasv.us/user/register');

    }
}

export default new RegistrationPage();