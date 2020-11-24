import { Role } from 'testcafe';
import authenticationPage from '../pages/authenticationPage';

const authenticationPageUrl = `${authenticationPage.baseUrl}${authenticationPage.url}`;

// get password via env vars...
const { THEOREM_PASSWORD } = process.env;

/**
 * Testcafe uses `Roles` to define user roles for logins that are triggered only _once_ per test file.
 * Thus they can be used in a `beforeEach` and they will only perform the login one time for all tests.
 *
 * https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
 */

export const user = Role(
  authenticationPageUrl,
  async () => {
    await authenticationPage.login('theorem@test.com', THEOREM_PASSWORD);
  },
  { preserveUrl: true }
);

export const invalidUser = Role(
  authenticationPageUrl,
  async () => {
    await authenticationPage.login('invalidUser@test.com', 'This password is fake');
  },
  { preserveUrl: true }
);