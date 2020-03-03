import Menu from "../../_page/Menu";
import ProfilePage from "../../_page/ProfilePage";
import loginPage from "../../_page/loginPage";
import LogoutPage from "../../_page/LogoutPage";
import {data} from "../../_data/profilePage.data";
import {student} from "../../_data/user_data";

 describe('PROFILE PAGE DAILY REPORT BUTTON TESTING', () => {
         before(() => {
           loginPage.login(student);
         });

         it('should go to Profile Page', () => {
           ProfilePage.goToProfilePage();
         });

         it('should check Create day report button exists and clickable', () => {
           const actual = browser.$(ProfilePage.createDayReportBTN).isDisplayed();
           expect(actual).to.be.true;
         });

         it('should check Create day report button exists and clickable', () => {
           const actual = browser.$(ProfilePage.createDayReportBTN).isClickable();
           expect(actual).to.be.true;
         });

         it('should click Create day report button', () => {
           const element = ProfilePage.createDayReportBTN;
           element.click();
         });

         it('should have correct header', () => {
           expect(Menu.h1.getText()).eq(data.dayReport.h1);
         });

         after('should logout', () => {
           LogoutPage.Logout();
         });
     });