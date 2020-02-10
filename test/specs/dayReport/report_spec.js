import { expect } from 'chai';
import dayReportPage from "./dayReportPage";
import LoginPage from "../login/LoginPage";
import RegistrationPage from "../Registration/RegistrationPage";

describe('DAILY REPORTS', ()=> {
    before( () => {
        LoginPage.login();
    });
    it('should open daily report creation', ()=> {
        dayReportPage.open();
    });
    it('', () => {
        const actual = dayReportPage.h1.getText();
        const expected = 'Daily reports';
        expect(actual).eq(expected);
    });

    it('must check the daily report button', () => {
        const actual = browser.$(dayReportPage.createDayReport).isDisplayed();
        expect(actual).to.be.true;
    });
    it('', () => {
        dayReportPage.createDayReport.click();
        browser.pause(3000);
    });
});