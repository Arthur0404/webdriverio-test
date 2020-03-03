import AppPage from "./AppPage";

class ProfilePage extends AppPage {

  get createDayReportBTN(){
    return browser.$('//a[@qa="create-day-report-button"]');
  }

  get likeBTN(){
    return browser.$('//button[@qa="like-button"]');
  }

  get coinTotalTopRight(){
    return browser.$('//div[@class="justify-content-end collapse navbar-collapse"]//span');
  }

  goToProfilePage(){
    browser.$('//a[@class="dropdown-toggle nav-link"]').click();
    browser.$('//button[contains(text(), "Profile")]').click();
  }


}

export default new ProfilePage();