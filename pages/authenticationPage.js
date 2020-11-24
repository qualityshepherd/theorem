import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const authenticationPage = {
  url: 'index.php?controller=authentication',

  signIn: {
    email: $('#email'),
    password: $('#passwd'),
    submitBtn: $('#SubmitLogin')
  },

  create: {
    email: $('#email_create'),
    submitBtn:  $('#SubmitCreate'),
  },

  errorMsg: $('.alert-danger'),

  async createAccount(email) {
    await t
      .typeText(this.create.email, email)
      .click(this.create.submitBtn)
  },

  async login(email, password) {
    await t
      .typeText(this.signIn.email, email)
      .typeText(this.signIn.password, password)
      .click(this.signIn.submitBtn);
  }
}
export default {...basePage, ...authenticationPage}