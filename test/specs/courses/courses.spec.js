import coursesPage from "./coursesPage";
import LoginPage from "../login/LoginPage";
import {expect} from "chai";
import ProfilePage from "../profile/ProfilePage";



describe('COURSES', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page', () => {
        browser.pause(5000);
        expect(ProfilePage.h1.getText()).eq('Admin Adminov');
    });

    it('should click top menu Diary', () => {
        coursesPage.coursesLink.click();
        browser.pause(2000);
    });

    it('', () => {
        const actual = coursesPage.h1.getText();
        const expected = 'Courses';
        expect(actual).eq(expected);
    });

    it('check button create new course', () => {
        const actual = browser.$(coursesPage.submitBTN).isDisplayed();
        expect(actual).to.be.true;
        browser.pause(3000);
    });

    it('check button create new course', () => {
        coursesPage.submitBTN.click();

    });

    it('check title new course', ()=> {
        const actual = browser.$(coursesPage.h1mr4).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check title new course', () => {
        const actual = coursesPage.h1mr4.getText();
        const expected = 'Create Course';
        expect(actual).eq(expected);
    });

    it('check field course name', () => {
        const actual = browser.$(coursesPage.nameCourses).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check field course name', () => {
        coursesPage.nameCourses.setValue('QA-5');
    });

    it('check field course description', () => {
        const actual= browser.$(coursesPage.description).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check field course description', () => {
        coursesPage.description.setValue('The course was created for technical interviews.');
    });

    it('check access type button', () => {
        const actual = browser.$(coursesPage.access).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check access type button', ()=> {
        coursesPage.access.selectByVisibleText('Members');
    });

    it('check button save', () => {
        const actual =browser.$(coursesPage.subBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check button save', () => {
        coursesPage.subBTN.click();
        browser.pause(5000);
    });
});