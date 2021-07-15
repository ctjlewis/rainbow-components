#!/usr/bin/env node
'use strict';

const { NODE_ENV } = process.env;
if (NODE_ENV === 'production')
  module.exports = require('./rainbow-components.production.min.cjs');
else
  module.exports = require('./rainbow-components.development.cjs');
