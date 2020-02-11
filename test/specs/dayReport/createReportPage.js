import Page from "../Page";

class createReportPage extends Page {

    get h1(){
        return browser.$('h1')
    }

    get Marks () {
        return browser.$('//form//strong')
    }

    get summary(){
        return browser.$('//form//textarea[@name="description"]')
    }
    get hours(){
        return browser.$('//form//input[@name="hours"]')
    }
    get morale(){
        return browser.$('//form//select[@name="morale"]')
    }
    get mark1(){
        return browser.$('//form//input[@label="Watched lectures"]')
    }

    get mark2(){
        return browser.$('//form//input[@label="I understood everything"]')
    }
    get mark3(){
        return browser.$('//form//input[@label="Read documentation"]')
    }
    get submitBTN(){
        return browser.$('//form//button[@type="submit"]')
    }




    open() {
        super.open('https://stage.pasv.us/diary/create');
    }
}
export default new createReportPage();