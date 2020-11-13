let $template = document.getElementById(`input-wrapper-template`);

class InputWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: `open` });
        this.shadowRoot.appendChild($template.content.cloneMode(true));

        this.$input = this.shadowRoot.getElementById(`input-main`);
        this.$error = this.shadowRoot.getElementById(`input-error`);
    }
    static get observedAttributes() {
        return [`label`, `type`, `error`, `value`];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case `label`:
                this.$input.placeHolder = newValue;
                break;
            case `type`:
                this.$input.type = newValue;
                break;
            case `error`:
                this.$error = newValue;
                break;
            case `value`:
                this.$input.value = newValue;
                break;
        }
    }
}