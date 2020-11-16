import { checkInputWrapperValue } from "../utils.js";
import { validateEmail } from "../utils.js";
import { validateStrongPassword } from "../utils.js";

const $template = document.getElementById(`register-form-template`);
class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$registerForm = this.shadowRoot.getElementById(`register-form`);

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

            let isPassed = checkInputWrapperValue(this.$name, function(value) {
                    return value == ``;
                }, `Nhap vao ten`) &
                checkInputWrapperValue(this.email, function(value) {
                    return value == `` || !validateEmail(value);
                }, `Email khong hop le`)

            &
            checkInputWrapperValue(this.$password, function(value) {
                return value == `` || !validateStrongPassword(value);
            }, `mat khau khong hop ly`)

            &
            checkInputWrapperValue(this.$passwordComfirmation, function(value) {
                return value == `` || value != password;
            }, `xac nhan mat khau khong hop le`);
            // kiem tra tong the
            if (isPassed) {
                alert(`dang ky thanh cong`);
            }
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