  class Menu {

    get profileDropDown(){
      return browser.$('//a[@class="dropdown-toggle nav-link"]');
    }

    get profileBTN () {
      return browser.$('//button[contains(text(), "Profile")]');
    }

    get coursesLink(){
      return browser.$('//div[@id="site-menu"]//a[@qa="courses-link"]');
    }

    get cardsLink(){
      return browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]');
    }

    get groupsLink(){
      return browser.$('//div[@id="site-menu"]//a[@qa="groups-link"]');
    }

    get h1(){
      return browser.$('//h1');
    }

    get p(){
      return browser.$('//p')
    }
  }

  export default new Menu();