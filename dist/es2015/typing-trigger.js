var _class, _temp;

const DEFAULT_DEBOUNCE = 500;

export let TypingTriggerCustomAttribute = (_temp = _class = class TypingTriggerCustomAttribute {

    constructor(element) {
        this._debounceTime = DEFAULT_DEBOUNCE;
        this._timeout = null;

        this.element = element;
    }

    valueChanged(debounce) {
        if (typeof debounce != 'undefined' && !isNaN(parseInt(debounce))) {
            this._debounceTime = parseInt(debounce);
        }
    }

    attached() {
        this.element.addEventListener('keyup', e => {
            let code = window.event ? e.keyCode : e.which;

            if (!code || (35 > code || code > 40) && 13 != code && 27 != code) {
                this._triggerTyping();
            }
        });
    }

    _triggerTyping() {
        if (null !== this._timeout) {
            window.clearTimeout(this._timeout);
        }

        this._timeout = window.setTimeout(() => {
            var event = new CustomEvent('typing', { bubbles: true });

            this.element.dispatchEvent(event);
        }, this._debounceTime);
    }
}, _class.inject = [Element], _temp);