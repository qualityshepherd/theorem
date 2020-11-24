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

  info: {
    first: $('#customer_firstname'),
    last: $('#customer_lastname'),
    password: $('#passwd'),
    address: $('#address1'),
    city: $('#city'),
    stateSelect: $('#id_state'),
    stateOption: $('option'),
    zip: $('#postcode'),
    mobile: $('#phone_mobile'),
    submit: $('#submitAccount')
  },

  errorMsg: $('.alert-danger'),

  /**
   * create an account
   * @param  {string} email
   */
  async createAccount(email) {
    await t
      .typeText(this.create.email, email)
      .click(this.create.submitBtn)
  },

  /**
   * add required information to finish account creation
   * @param {obj} data
   *
   * NOTE: all fields are required in the app
   */
  async addAccountInfo(data) {
    await t
      .typeText(this.info.first, data.first)
      .typeText(this.info.last, data.last)
      .typeText(this.info.password, data.password)
      .typeText(this.info.address, data.address)
      .typeText(this.info.city, data.city)
      .click(this.info.stateSelect)
      .click(this.info.stateOption.withText(data.state))
      .typeText(this.info.zip, data.zip)
      .typeText(this.info.mobile, data.mobile)
      .click(this.info.submit);
  },

  async login(email, password) {
    await t
      .typeText(this.signIn.email, email)
      .typeText(this.signIn.password, password)
      .click(this.signIn.submitBtn);
  }
}
export default {...basePage, ...authenticationPage}