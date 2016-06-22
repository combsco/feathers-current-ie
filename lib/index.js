'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asset = require('./services/asset');

var _asset2 = _interopRequireDefault(_asset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import location from './services/location'
// import parking from './services/parking'
// import media from './services/media'

exports.default = { asset: _asset2.default };
module.exports = exports['default'];