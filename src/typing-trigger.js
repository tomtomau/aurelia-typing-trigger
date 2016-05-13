const DEFAULT_DEBOUNCE = 500;

export class TypingTriggerCustomAttribute {
    static inject = [Element];
    _debounceTime = DEFAULT_DEBOUNCE;
    _timeout = null;

    constructor(element) {
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

            // @TODO: Explain keycodes
            if (!code || (35 > code || code > 40) && 13 != code && 27 != code) {
                this._triggerTyping();
            }
        });
    }

    /**
     * Set a timeout for the typing event to be dispatched
     * @private
     */
    _triggerTyping() {
        // If there is a current timeout set to dispatch teh event
        if (null !== this._timeout) {
            // Then cancel it
            window.clearTimeout(this._timeout);
        }

        this._timeout = window.setTimeout(() => {
            var event = new CustomEvent('typing', { bubbles: true });

            this.element.dispatchEvent(event);
        }, this._debounceTime);
    }
}