import flashGroupPage from "./flashGroupPage";
import LoginPage from "../login/LoginPage";
import {expect} from "chai";
import ProfilePage from "../profile/ProfilePage";


describe('FLASH GROUP CREATE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page',() => {
        browser.pause(5000);
        expect(ProfilePage.h1.getText()).eq('Admin Adminov');
    });

    it('should click top menu Cards', () => {
        flashGroupPage.cards.click();
        browser.pause(2000);
    });

    it('', () => {
        const actual = flashGroupPage.h1.getText();
        const expected = 'FlashCards';
        expect(actual).eq(expected);
    });

    it('should click button Create new FlashGroup', ()=> {
        const actual = browser.$(flashGroupPage.submitBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should click button Create new FlashGroup', () => {
        flashGroupPage.submitBTN.click();
        browser.pause(3000);
    });

    it('', () => {
        const actual = flashGroupPage.createFlash.getText();
        const expected = 'Create Flash Group';
        expect(actual).eq(expected);
    });

    it('should fill out in group name field',()=> {
        const actual = browser.$(flashGroupPage.groupName).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should fill out in group name field', () => {
        flashGroupPage.groupName.setValue('My group name 123')
    });

    it('should fill out input group description', ()=> {
        const actual = browser.$(flashGroupPage.groupDescription).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should fill out input group description', () => {
        flashGroupPage.groupDescription.setValue('My group description 123...');
    });

    it('should submit form', () =>{
        const actual = browser.$(flashGroupPage.submitFormBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should submit form', () => {
        flashGroupPage.submitFormBTN.click();
        browser.pause(3000);
    });

    it('should first item in list be equal group title', () => {
        flashGroupPage.listGroup.getText('My group name 123');
    });

    it('should first item in list be equal group description', () =>{
        flashGroupPage.listGroupDesc.getText('My group description 123...');
    });

    it('should verify created title group is clickable', ()=>{
        flashGroupPage.createdGroup.click();
        browser.pause(3000);
    });

});