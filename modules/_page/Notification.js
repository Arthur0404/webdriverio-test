class Notification {

  get title(){
    return browser.$('//h4[@class="notification-title"]');
  }

  get invalidMsg(){
    return browser.$('//div[contains(@class, "form")]//div[contains(text(), "Invalid")]');
  }
}

export default new Notification();