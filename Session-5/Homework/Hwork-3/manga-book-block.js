let $mangaTemplate = document.querySelector(`template`);

class MangaBookBlock extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: `open` });
        this.shadowRoot.appendChild($mangaTemplate.content.cloneNode(true));
    }
    static get observedAttributes() {
        console.log(`observedAttributes`);
        return [`image`, `tagsname`, `titlename`, `dateinfo`, `priceinfo`, `amountinfo`];
    }
    connectedCallback() {
        console.log(`i'm alive`);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == `image`) {
            this.shadowRoot.querySelector(`img`).src = newValue;
        }
        if (attrName == `tagsname`) {
            let tags = this.shadowRoot.querySelectorAll(`.tag`);
            let values = newValue.split(`-`);
            for (let i = 0; i < tags.length; ++i) {
                tags[i].textContent = values[i];
            }
        }
        if (attrName == `titlename`) {
            this.shadowRoot.querySelector(`.title-text`).textContent = newValue;
        }
        if (attrName == `dateinfo`) {
            this.shadowRoot.querySelector(`.date-text`).textContent = newValue;
        }
        if (attrName == `priceinfo`) {
            this.shadowRoot.querySelector(`.price-text`).textContent = newValue;
        }
        if (attrName == `amountinfo`) {
            this.shadowRoot.querySelector(`.amount-text`).textContent = newValue;
        }
    }
    disconnectedCallback() {
        console.log(`i'm dead`);
    }

}
window.customElements.define(`manga-book-block`, MangaBookBlock);