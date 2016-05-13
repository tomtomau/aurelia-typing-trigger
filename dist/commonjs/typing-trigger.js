'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_DEBOUNCE = 500;

var TypingTriggerCustomAttribute = exports.TypingTriggerCustomAttribute = (_temp = _class = function () {
    function TypingTriggerCustomAttribute(element) {
        _classCallCheck(this, TypingTriggerCustomAttribute);

        this._debounceTime = DEFAULT_DEBOUNCE;
        this._timeout = null;

        this.element = element;
    }

    TypingTriggerCustomAttribute.prototype.valueChanged = function valueChanged(debounce) {
        if (typeof debounce != 'undefined' && !isNaN(parseInt(debounce))) {
            this._debounceTime = parseInt(debounce);
        }
    };

    TypingTriggerCustomAttribute.prototype.attached = function attached() {
        var _this = this;

        this.element.addEventListener('keyup', function (e) {
            var code = window.event ? e.keyCode : e.which;

            if (!code || (35 > code || code > 40) && 13 != code && 27 != code) {
                _this._triggerTyping();
            }
        });
    };

    TypingTriggerCustomAttribute.prototype._triggerTyping = function _triggerTyping() {
        var _this2 = this;

        if (null !== this._timeout) {
            window.clearTimeout(this._timeout);
        }

        this._timeout = window.setTimeout(function () {
            var event = new CustomEvent('typing', { bubbles: true });

            _this2.element.dispatchEvent(event);
        }, this._debounceTime);
    };

    return TypingTriggerCustomAttribute;
}(), _class.inject = [Element], _temp);