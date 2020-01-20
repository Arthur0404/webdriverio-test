const { expect } = require ('chai');
const {URL_LOGIN, URL_ADMIN_LOGIN, adminDialyReports,pageRegisterSelectors, pageDiaryCreate,} = require ('./register_data');

describe('login as admin', () => {
it('should have the rigth title', () => {
    browser.url(URL_LOGIN);
    $('form input[name="email"]').setValue('admin@test.com');
    $('form input[name="password"]').setValue('11111');
    $('form button[type="submit"]').click();
    browser.pause(1000);
    });
});

/*--------------------------------------------------------*/

describe('Profile', () => {
    browser.url(URL_ADMIN_LOGIN);
    it('should hav the right title', () => {
        const actualH1Title = browser.getTitle();
        expect(actualH1Title).equal(adminDialyReports.title);
    });

    it('should hav a correct title ',  () => {
        const actualH1Text = $(pageRegisterSelectors.h1).getText();
        const expectedH1Text = adminDialyReports.h1;
        expect(actualH1Text).equal(expectedH1Text);

    });

    /*----------------------------------------------------------------*/

    it('should redirect to Diary page', () => {
        const diaryLink = '//div[@id="site-menu"]/ul/li/a[contains(text(),"Diary")]';
        $(diaryLink).click();
        browser.pause(1000)
    });

    it('should redirect to Create a day report page', () => {
        const diaryReport = '//a[(text()="Create day report")]';
        $(diaryReport).click();
        browser.pause(1000)
    });

    it('should hav a correct title', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = pageDiaryCreate.h1;
        expect(actual).equal(expected);
    })
    it('must choose what morale',  () => {
        const element = $(pageRegisterSelectors.moraleLevelInput);
        element.selectByVisibleText(pageDiaryCreate.morale);
        browser.pause(1000)
    });
    it('choose how many hours you studied / practiced',  () => {
        const element = $(pageRegisterSelectors.hoursInput);
        element.setValue(pageDiaryCreate.hours);
        browser.pause(2000)
    });
    it('write how the day went',  () => {
        const element = $(pageRegisterSelectors.howWasYourDay);
        element.setValue(pageDiaryCreate.description);
        browser.pause(2000)
    });
    it('select one or more items',  () => {
        const element = $(pageRegisterSelectors.dailyReportInput);
        element.click();
    });
    it('select one or more items',  () => {
        const element = $(pageRegisterSelectors.dailyReportInput1);
        element.click();
    });
    it('select one or more items',  () => {
        const element = $(pageRegisterSelectors.dailyReportInput2);
        element.click();
    });
    it('select one or more items',  () => {
        const element = $(pageRegisterSelectors.dailyReportInput3);
        element.click();
    });
    it('should  click Submit save',  () => {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(5000)
    });
});




