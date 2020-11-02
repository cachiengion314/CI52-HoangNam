const $template = document.getElementById(`meme-container-template`);
// Tạo shadow-dom
class MemeContainer extends HTMLElement {
    constructor() {
            super();
            this.attachShadow({ mode: `open` });
            this.shadowRoot.appendChild($template.content.cloneNode(true));
        }
        // được gọi khi component được sinh ra
    connectedCallback() {
            console.log(`i'm alive!`)
        }
        // được gọi khi thuộc tính của component được thay đổi
    attributeChangedCallback(name, oldValue, newValue) {

        }
        // được gọi khi component mất đi
    disconnectedCallback() {
        console.log(`i'm death!`)
    }
}

// Tạo custom-element
// Tên bắt buộc phải có dấu -
window.customElements.define(`meme-container`, MemeContainer);