/*
 * tcomb-httpcli
 * https://github.com/parroit/tcomb-httpcli
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var tcombHttpcli = require('../lib/tcomb-httpcli.js');

describe('tcombHttpcli', function(){
    it('is defined', function(){
      tcombHttpcli.should.be.a('function');
    });

});
