import { Chance } from "chance";
const chance = new Chance();

/**
 * random data generation...
 */
export const word = chance.word();
export const first = chance.first();
export const last = chance.last();
export const email = chance.email({ domain: "test.com" });
export const password = chance.string({ length: 10 });
export const address = chance.street();
export const city = chance.city();
export const state = chance.state({ full: true });
export const zip = chance.zip();
export const mobile = chance.phone();
