import Logout from "../../_page/LogoutPage";
import loginPage from "../../_page/loginPage";
import {student} from "../../_data/user_data";

 describe('LOGOUT', () => {
        before(() => {
          loginPage.login(student);
        });

        it('should logout', () => {
          Logout.Logout();
          browser.pause(3000);
        });
     });