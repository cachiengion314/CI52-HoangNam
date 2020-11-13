import { checkInputWrapperValue } from "../utils.js";


const $template = document.getElementById(`register-form-template`);
class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$registerForm = this.shadowRoot.getElementById(`register-form`);

        console.log(this);
        this.$name = this.shadowRoot.getElementById(`name`);
        this.$email = this.shadowRoot.getElementById(`email`);
        this.$password = this.shadowRoot.getElementById(`password`);
        this.$passwordComfirmation = this.shadowRoot.getElementById(`password-comfirmation`);
    }

    static get observedAttributes() {
        return ['label', 'type', 'error', 'value'];
    }

    connectedCallback() {
        this.$registerForm.onsubmit = (event) => {
            event.preventDefault(); // chặn mặc định => ko cho chuyển hướng từ attr action

            let name = this.$name.value;
            let email = this.$email.value;
            let password = this.$password.value;
            let passwordComfirmation = this.$passwordComfirmation.value;

            checkInputWrapperValue(this.$name, function() {
                // console.log(value);
                return true;
            }, `Nhap vao ten`);

            // kiểm tra dữ liệu
            console.log(this);
            console.log(this.$name.value);
            console.log(this.$email.value);
            console.log(this.$password.value);
            console.log(this.$passwordComfirmation.value);

            console.log(`submit form dang ky`);
        }
    }

    // attributeChangedCallback(attrName, oldValue, newValue) {
    //     switch (attrName) {
    //         case 'label':
    //             this.$input.placeholder = newValue;
    //             break;

    //         case 'type':
    //             this.$input.type = newValue;
    //             break;

    //         case 'error':
    //             this.$error.innerHTML = newValue;
    //             break;

    //         case 'value':
    //             this.$input.value = newValue;
    //             break;
    //     }
    // }
}

window.customElements.define(`register-form`, RegisterForm);