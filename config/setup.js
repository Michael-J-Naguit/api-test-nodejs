global.chai = require('chai');
global.should = chai.should();
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

global.server = "https://jsonplaceholder.typicode.com";