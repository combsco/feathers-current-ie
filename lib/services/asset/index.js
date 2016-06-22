'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = init;

var _feathersErrors = require('feathers-errors');

var _feathersErrors2 = _interopRequireDefault(_feathersErrors);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _currentIe = require('current-ie');

var _currentIe2 = _interopRequireDefault(_currentIe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _debug2.default)('feathers-currentie:asset');

var Service = function () {
  function Service() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Service);

    if (!options.token) {
      throw new Error('CurrentIE - Predix `token` needs to be provided');
    }

    if (!options.zoneId) {
      throw new Error('CurrentIE - Predix `zoneId` needs to be provided');
    }

    this.currentie = new _currentIe2.default(options.token, options.zoneId);
  }

  _createClass(Service, [{
    key: 'find',
    value: function find(params) {
      return new Promise(function (resolve, reject) {
        // Put some async code here.
        if (!params.query) {
          return reject(new _feathersErrors2.default.BadRequest());
        }

        resolve([]);
      });
    }
  }, {
    key: 'get',
    value: function get(id) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (!id) {
          return reject(new _feathersErrors2.default.BadRequest('`id` needs to be provided'));
        }

        // return this.twilio.messages(id).get().then(resolve).catch(reject)
        return _this.currentie.getAssetDetailByAssetId(id).then(resolve).catch(reject);
      });
    }
  }]);

  return Service;
}();

function init(options) {
  debug('Initializing feathers-currentie:asset plugin');
  return new Service(options);
}

init.Service = Service;
module.exports = exports['default'];