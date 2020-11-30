const denv = require('dotenv').config();

module.exports = {
    token: process.env.token
}
console.log(module.exports.token);
