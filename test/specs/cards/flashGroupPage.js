import Page from "../Page";

class flashGroupPage extends  Page {

    get cards (){
        return browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]')
    }

    get h1(){
        return browser.$('//h1')
    }
    get submitBTN(){
        return browser.$('//button[@qa="flash-create-new-group"]')
    }
    get createFlash(){
        return browser.$('//div[contains(@class, "sidepanel")]//*[@class="modal-title"]')
    }

    get groupName(){
        return browser.$('//div[contains(@class, "sidepanel")]//input[@name="name"]')
    }

    get groupDescription(){
        return browser.$('//div[contains(@class, "sidepanel")]//input[@name="description"]')
    }
    get submitFormBTN(){
        return browser.$('//div[contains(@class, "sidepanel")]//button[@type="submit"]')
    }
    get listGroup(){
        return browser.$('//div[@qa="flash-group-list "]//h4/a')
    }
    get listGroupDesc(){
        return browser.$('//div[@qa="flash-group-list "]//div[@qa="description"]')
    }
    get createdGroup (){
        return browser.$('//div[@qa="flash-group-list "]//h4/a')
    }




    open() {
        super.open('https://stage.pasv.us/flash');
    }
}

export  default new flashGroupPage();