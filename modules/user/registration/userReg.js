import axios from 'axios';
import {expect} from 'chai';


 describe('USER REGISTRATION',  () => {
         it('should 123', async () => {
           expect(response.data.token).not.empty;
            expect(response.status).eq(200);
         });

         it('should token in not empty', () => {
           console.log(process.env.ADMIN_TOKEN)
           expect(process.env.ADMIN_TOKEN).is.not.empty;
         })

          it('should verify from DB user by email', async () => {
            const email = 'admin@pasv.com';
            const response = await axios({
              method: 'get',
              url: `https://server-stage.pasv.us/user/email/${email}`,
              headers: {
                Authorization: process.env.ADMIN_TOKEN,
              },
            })

              .then(res => res)
              .catch(err => err)

            expect(response.status).eq(200);
            expect(response.data.payload.name).eq('Admin PASV');
          });
     });