//const app = require('../app')
require('dotenv').config()

test("Test ENV",() =>{
    expect(process.env.BOT_USERNAME).not.toBe(undefined);
    expect(process.env.OAUTH_TOKEN).not.toBe(undefined);
});