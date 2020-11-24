import { Chance } from "chance";
const chance = new Chance();

/**
 * random data generation...
 */

export const email = chance.email({ domain: "test.com" });

