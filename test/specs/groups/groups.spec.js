import groupsPage from "./groupsPage";
import LoginPage from "../login/LoginPage";
import {expect} from "chai";
import ProfilePage from "../profile/ProfilePage";



describe('GROUPS', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page', () => {
        browser.pause(5000);
        expect(ProfilePage.h1.getText()).eq('Admin Adminov');
    });

    it('should click top menu Groups', () => {
        groupsPage.groupsLink.click();
        browser.pause(2000);
    });

    it('title Groups', () => {
        const actual = groupsPage.h1.getText();
        const expected = 'Groups';
        expect(actual).eq(expected);
    });

    it('check button create new group', () => {
        const actual = browser.$(groupsPage.submitBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check button create new group', () => {
        groupsPage.submitBTN.click();
        browser.pause(3000);
    });

    it('title Create New Group', () => {
        const actual = groupsPage.h1Create.getText();
        const expected = 'Create new Group';
        expect(actual).eq(expected);
    });

    it('check field group name', () => {
        const actual = browser.$(groupsPage.nameGroup).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check field group  name', () => {
        groupsPage.nameGroup.setValue('QA 5 new Group');
    });

    it('check field group  description', ()=> {
        const actual = browser.$(groupsPage.descriptionGroup).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check field group  description', () => {
        groupsPage.descriptionGroup.setValue('group created to improve programming skills');
    });

    it('check access type button', () => {
        const actual = browser.$(groupsPage.accessGroup).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check access type button', () => {
        groupsPage.accessGroup.selectByVisibleText('Members');
    });

    it('check button save', ()=> {
        const actual = browser.$(groupsPage.subBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check button save', ()=> {
        groupsPage.subBTN.click();
        browser.pause(5000);
    });

    it('check if the group was created', () => {
        groupsPage.listNameGroup.getText('QA 5 new Group');
        browser.pause(2000);
    });
});