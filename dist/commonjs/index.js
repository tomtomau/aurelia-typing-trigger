'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

require('./typing-trigger');

function configure(config) {
  config.globalResources('./typing-trigger');
}