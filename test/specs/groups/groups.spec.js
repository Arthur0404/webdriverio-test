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

     describe('NEW GROUP', () => {
         it('should check if a new group has been created',() => {
             const actual = browser.$(groupsPage.newGroupBTN).isDisplayed();
             expect(actual).to.be.true;
         });
          it('should check if a new group has been created', () => {
              groupsPage.newGroupBTN.click();
              browser.pause(5000);
          });

          it('should ', ()=> {
              const actual = browser.$(groupsPage.editBTN).isDisplayed();
              expect(actual).to.be.true;
          });

          it('should', () => {
              groupsPage.editBTN.click();
              browser.pause(5000);
          });

          it('should', () => {
              const actual = browser.$(groupsPage.editGroupH1).isDisplayed();
              expect(actual).to.be.true;
          });

          it('should', () => {
              const actual = groupsPage.editGroupH1.getText();
              const expected = 'Edit Group';
              expect(actual).eq(expected);
          });

         it('should check the name of the group', () => {
             const actual = browser.$(groupsPage.editNameGroup).isDisplayed();
             expect(actual).to.be.true;
         });
         //
         // it('should name group', () => {
         //     const actual = groupsPage.editNameGroup.getText();
         //     const expected = 'QA 5 new Group';
         //     expect(actual).eq(expected);
         // });

         it('should description group', () => {
             const actual = browser.$(groupsPage.editDescriptionGroup).isDisplayed();
             expect(actual).to.be.true;
         });

         it('should description group', ()=> {
             groupsPage.editDescriptionGroup.getText('group created to improve programming skills');
         });

         it('should access type', () => {
             const actual= browser.$(groupsPage.editAccess).isDisplayed();
             expect(actual).to.be.true;
         });

         it('should access type', () => {
             groupsPage.editAccess.selectByVisibleText('Members');
         });

         it('should WebHook', () => {
             const actual = browser.$(groupsPage.editWebHook).isDisplayed();
             expect(actual).to.be.true;
         });

         it('should WebHook', () => {
             groupsPage.editWebHook.setValue('Yandex web service designed to translate part of a text or web page into another language.')
         });

         it('should add Quiz', () => {
             const actual = browser.$(groupsPage.AddQuiz).isDisplayed();
             expect(actual).to.be.true;
         });

         it('should Add Quiz', () => {
             groupsPage.AddQuiz.setValue('The service uses a self-learning statistical machine translation algorithm')
         });
        it('should', () => {
            const actual = browser.$(groupsPage.users).isDisplayed();
            expect(actual).to.be.true;
        });
     });

