import {expect} from 'chai';
import AppPage from "./AppPage";

class mainPage extends  AppPage {
  get header(){
    return browser.$('//h1');
  }

  get p(){
    return browser.$('//p')
  }

   verifyTitle (title){
    expect(browser.getTitle()).equal(title);
  }

  verifyElementText(element,text){
    browser.waitUntil(() => element.getText() === text, 5000, "Doesn't match Text");
  }

  smartClick(selector){
    selector.waitForClickable();
    selector.click();
  }
}
export default new mainPage();