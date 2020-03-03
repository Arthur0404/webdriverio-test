import AppPage from "./AppPage";


class CheckEmailPage extends  AppPage {
   get h1(){
     return browser.$('//h1');
   }

   get successMSG(){
     return browser.$('//h4[@class="notification-title"]');
   }

   get tryAgainLink(){
     return browser.$('//a[text()="try again"]');
   }

   open(path) {
     super.open('https://stage.pasv.us/user/password/reset/mailed');
   }
}

export default new CheckEmailPage();