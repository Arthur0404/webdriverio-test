import Page from '../Page';

    class ProfilePage extends Page {
        get h1 (){
            return browser.$('//h1');
        }
}


export default new ProfilePage();