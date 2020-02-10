import Page from "../Page";

class LoginPage extends Page{

        get email () {
            return browser.$('//input[@name="email"]');
        }

        get password () {
            return browser.$('//input[@name="password"]');
        }

        get submitBTN () {
            return browser.$('//button[@type="submit"]');
        }
        get h1 () {
            return browser.$('//h1');
        }

    login () {
         this.open();
         this.email.setValue('admin@test.com');
         this.password.setValue('11111');
         this.submitBTN.click();
         browser.pause(5000);
    }

    open() {
        super.open('https://stage.pasv.us/user/login');
    }
}

export default new LoginPage;