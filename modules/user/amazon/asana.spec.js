
const {expect} = require('chai');

 describe('ASANA COM ', () => {
         before('should Asana com to go verify', () => {
            browser.url('https://asana.com/');
         });

         it('should why asana ' ,()=> {
           browser.$('//button[@id="navigation__dropdown-toggle-why-asana"]').click();
           browser.pause(10000);
            browser.$('//h4[contains(text(), "Timeline")]').click();
            browser.$('//button[@id="navigation__dropdown-toggle-solutions"]').click();
         });

 });

