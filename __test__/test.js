//const app = require('../app')
require('dotenv').config()

test("Test Username ENV",() =>{
    expect(process.env.BOT_USERNAME).not.toBe(undefined);
});
test("Test oauth_token ENV",() =>{
    expect(process.env.OAUTH_TOKEN).not.toBe(undefined);
});