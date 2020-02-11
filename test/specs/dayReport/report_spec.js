import { expect } from 'chai';
import dayReportPage from "./dayReportPage";
import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import createReportPage from "./createReportPage";


describe('DAILY REPORTS', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page',() => {
        browser.pause(5000);
        expect(ProfilePage.h1.getText()).eq('Admin Adminov');
    });

    it('should click top menu Diary', ()=>{
        createReportPage.diary.click();
        browser.pause(2000)
    });

    it('', () => {
        const actual = dayReportPage.h1.getText();
        const expected = 'Daily reports';
        expect(actual).eq(expected);
    });

    it('must check the daily report button', () => {
        const actual = browser.$(dayReportPage.submitBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check if the button is clickable', () => {
        dayReportPage.submitBTN.click();
        browser.pause(2000);
    });
});

describe('CREATE DAY REPORT', () => {
    it('must check the creation of a daily report', ()=>{
        const actual = createReportPage.h1.getText();
        const expected = 'Create day report';
        expect(actual).eq(expected);
    });

    it('check the header of the daily report mark', ()=>{
        const actual = browser.$(createReportPage.Marks).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check modal window if morale is displayed', () => {
        const actual = browser.$(createReportPage.morale).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check morale', () => {
        createReportPage.morale.selectByVisibleText('10 – I am pleased with everything!');
    });

    it('should check if the modal window is displayed how many hours he studied', () => {
        const actual = browser.$(createReportPage.hours).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check how many hours he studied', ()=> {
        createReportPage.hours.setValue('8');
    });

    it('should check how was your day', () => {
        const actual = browser.$(createReportPage.summary).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check how was your day', () => {
        createReportPage.summary.setValue('Today I passed an interview for a tester position with a good salary');
    });

    it('should ', () => {
        const actual = browser.$(createReportPage.mark1).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check if clickable button', () => {
        createReportPage.mark1.click();
    });

    it('should check ', () => {
        const actual = browser.$(createReportPage.mark2).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check if clickable button ', () => {
        createReportPage.mark2.click();
    });

    it('should check ', () => {
        const actual = browser.$(createReportPage.mark3).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check if clickable button ', () => {
        createReportPage.mark3.click();
    });

    it('should save button', () => {
        const actual = browser.$(createReportPage.submitBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should save button', () => {
        createReportPage.submitBTN.click();
        browser.pause(5000);
    });
});
