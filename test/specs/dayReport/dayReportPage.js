import Page from "../Page"

class dayReportPage extends Page {

    get h1 (){
        return browser.$('h1');
    }
    get createDayReport () {
        return browser.$('//a[@qa="btn-group-sm btn-group"]');
    }





    open() {
        super.open('https://stage.pasv.us/diary');
    }
}
export default new dayReportPage();