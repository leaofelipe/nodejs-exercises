/**
* Debug example
*/

// Load once a dotenv file and configure
require('dotenv').config()

let debug = require('debug')('myApp')

debug('booting %s')
