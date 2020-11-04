const $template = document.getElementById('meme-container-template');

// tạo shadow-dom
class MemeContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    // được gọi khi component được sinh ra
    connectedCallback() {
        console.log("Vừa có 1 cái meme được tạo");
    }

    // được gọi khi thuộc tính của component thay đổi
    attributeChangedCallback(name, oldValue, newValue) {

    }

    // được gọi khi component mất đi
    disconnectedCallback() {
        console.log("Vừa có 1 meme bị xóa đi do quá nhàm chán");
    }

}

// tạo custom-element
window.customElements.define('meme-container', MemeContainer);