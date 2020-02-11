import Page from "../Page"

class dayReportPage extends Page {

    get h1 (){
        return browser.$('h1');
    }
    get submitBTN () {
        return browser.$('//a[@class="btn btn-secondary"]');
    }

    open() {
        super.open('https://stage.pasv.us/diary');
    }
}

export default new dayReportPage();