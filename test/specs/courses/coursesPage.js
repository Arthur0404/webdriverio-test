import Page from "../Page";

class coursesPage extends Page {

    get coursesLink(){
        return browser.$('//div[@id="site-menu"]//a[@qa="courses-link"]')
    }
    get h1(){
        return browser.$('//h1')
    }

    get submitBTN (){
        return browser.$('//div[@class="form-group"]//a[@class="btn btn-primary"]')
    }

    get h1mr4(){
        return browser.$('//span[@class="h1 mr-4"]')
    }

    get nameCourses(){
        return browser.$('//input[@name="name"]')
    }

    get description (){
        return browser.$('//input[@name="description"]')
    }

    get access(){
        return browser.$('//select[@name="accessType"]')
    }

    get subBTN(){
        return browser.$('//button[@type="submit"]')
    }

    open() {
        super.open('https://stage.pasv.us/course');
    }
}

export default new coursesPage();