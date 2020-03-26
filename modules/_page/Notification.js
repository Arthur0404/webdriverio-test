class Notification {

  get title(){
    return browser.$('//h4[@class="notification-title"]');
  }
  get success (){
    return browser.$('//div[@class="notification notification-success notification-visible"]');
  }

  get fail(){
    return browser.$('//div[@class="notification notification-error notification-visible"]');
  }
  get invalidMsg(){
    return browser.$('//div[contains(@class, "form")]//div[contains(text(), "Invalid")]');
  }
}


export default new Notification();