let $myOwnTemplate = document.getElementById(`my-own-custom-template`);

class MyOwnContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: `open` });
        this.shadowRoot.appendChild($myOwnTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        console.log(`Hi, i'm in the connectedCallback`);
    }
    atributeChangedCallback() {
        console.log(`Hello there, i'm in the atributeChangedCallback`);
    }
    disconnectedCallback() {
        console.log(`Hi, i'm in the disconnectedCallback`);
    }
}

window.customElements.define(`my-own-template`, MyOwnContainer);