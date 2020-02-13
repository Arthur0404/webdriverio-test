import Page from "../Page";

class groupsPage extends Page {

    get groupsLink(){
        return browser.$('//a[@qa="groups-link"]')
    }

    get h1(){
        return browser.$('//h1')
    }
    get submitBTN(){
        return browser.$('//a[@qa="create-group-button"]')
    }

    get h1Create(){
        return browser.$('//h1')
    }

    get nameGroup(){
        return browser.$('//input[@name="name"]')
    }

    get descriptionGroup(){
        return browser.$('//input[@name="description"]')
    }
    get accessGroup(){
        return browser.$('//select[@name="accessType"]')
    }

    get subBTN(){
        return browser.$('//button[@type="submit"]')
    }

    get listNameGroup(){
        return browser.$('//div[@qa="group-list-item"]//h4/a')
    }


    open() {
        super.open('https://stage.pasv.us/group');
    }
}

export default new groupsPage();