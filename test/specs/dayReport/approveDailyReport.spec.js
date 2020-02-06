const  {URL_REPORT,logOut,loginAsAdmin} = require('./actions');

describe('CREATE DAY REPORT', () => {
    before('login as admin', () => {
        loginAsAdmin();
    });

    it('should open Create Day Report page', ()=> {
        browser.url(URL_REPORT);
        browser.pause(2000);
    });
    after('logout', () => {
        logOut();
        browser.pause(2000);
    });
});