// const { expect } = require ('chai');
// const {URL_LOGIN,  URL_GROUPS, URL_GROUPS_Create,pageRegisterSelectors, groupsCreate} = require ('./register_data');
//
// describe('login as admin', () => {
//     it('should have the rigth title', () => {
//         browser.url(URL_LOGIN);
//         $('form input[name="email"]').setValue('admin@test.com');
//         $('form input[name="password"]').setValue('11111');
//         $('form button[type="submit"]').click();
//         browser.pause(1000);
//     });
// })
//
// /*--------------------------------------------------------*/
//
// describe('', () => {
//     browser.url(URL_GROUPS_Create);
//     it('should hav the right title', () => {
//         const actualH1Title = browser.getTitle();
//         expect(actualH1Title).equal(pageRegisterSelectors.h1);
//     });
// });
// /*-----------------------------------*/
//     describe('Groups', () => {
//         it('should redirect to Groups', () => {
//             const diaryLink = '//div[@id="site-menu"]/ul/li/a[contains(text(),"Groups")]';
//             $(diaryLink).click();
//             browser.pause(1000)
//         });
//
//         it('should redirect to Create a day report page', () => {
//             const GroupNew = '//a[(text()="Create new Group")]';
//             $(GroupNew).click();
//             const actualUrl = browser.getUrl();
//             expect(actualUrl).eq()
//             browser.pause(1000)
//         });
//         it('Group',  () => {
//             const element = $(pageRegisterSelectors. createGroup);
//             element.selectByVisibleText(groupsCreate.nameGroup);
//             browser.pause(1000)
//         });
//         it('',  () => {
//             const element = $(pageRegisterSelectors. createGroup);
//             element.selectByVisibleText(groupsCreate. description);
//             browser.pause(1000)
//         });
//         it('',  () => {
//             const element = $(pageRegisterSelectors. createGroup);
//             element.selectByVisibleText(groupsCreate.type);
//             browser.pause(1000)
//         });
//     });
