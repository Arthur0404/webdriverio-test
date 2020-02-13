import quizPage from "./quizPage";
import LoginPage from "../login/LoginPage";
import {expect} from "chai";
import ProfilePage from "../profile/ProfilePage";



describe('QUIZ', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page', () => {
        browser.pause(5000);
        expect(ProfilePage.h1.getText()).eq('Admin Adminov');
    });

    it('should click top menu Quiz', () => {
        quizPage.quizLink.click();
        browser.pause(2000);
    });

    it('title Quiz', () => {
        const actual = quizPage.h1.getText();
        const expected = 'Quiz';
        expect(actual).eq(expected);
    });

    it('check if there is a button Create Quistion Group', () => {
        const actual = browser.$(quizPage.submitBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check if there is a button', () => {
       quizPage.submitBTN.getText('Create Question Group');
    });
    it('check if there is a button', ()=> {
       quizPage.submitBTN.click();
       browser.pause(3000);
    });

    it('should correct title Create quiz group', ()=> {
        const actual = quizPage.h1QuizGroup.getText();
        const expected = 'Create Question Group';
        expect(actual).eq(expected);
    });

    it('should check the group name field', () => {
        const actual = browser.$(quizPage.nameQuizGroup).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check the group name field', () => {
        quizPage.nameQuizGroup.setValue('QA 5 PASV US');
    });

    it('should check the group description field', () => {
        const actual = browser.$(quizPage.descriptionQuiz).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should check the group description field', () => {
        quizPage.descriptionQuiz.setValue('QA 5 group created to pass the quiz and tests');
    });

    it('check field permissible errors', ()=> {
        const actual = browser.$(quizPage.mistakes).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check field permissible errors', () => {
        quizPage.mistakes.setValue('2');
    });

    it('check active button', ()=> {
        const actual = browser.$(quizPage.active).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check access type button', () => {
        const actual = browser.$(quizPage.subBTN).isDisplayed();
        expect(actual).to.be.true;
    });

    it('check access type button', () => {
        quizPage.subBTN.click();
        browser.pause(5000);
    });

    it('should first item in list be equal group title',()=> {
        const actual = browser.$(quizPage.name).isDisplayed();
        expect(actual).to.be.true;
    });

    it('should first item in list be equal group title', ()=> {
        quizPage.name.getText('QA 5 PASV US');
    });

    it('should first item in list be equal group description', () => {
        quizPage.description.getText('QA 5 group created to pass the quiz and tests');
    });

    it('mistakes', ()=> {
        quizPage.mist.getText('2');
    });

    it('active button', () => {
       const actual = browser.$(quizPage.activeNew).isDisplayed();
       expect(actual).to.be.true;
    });

    it('save button', () => {
        const actual = browser.$(quizPage.saveBTN).isDisplayed();
        expect(actual).to.be.true;
        browser.pause(3000);
    });
});












