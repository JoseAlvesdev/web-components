export default class SpoilerParagraph extends HTMLParagraphElement {
    constructor () {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host(.spoiler) {
                    background-color: gray;
                    color: transparent;
                    cursor: pointer;
                }
            </style>
            <slot></slot>
        `;
    }

    connectedCallback () {
        this.classList.add('spoiler');

        this.addEventListener('click', () => {
            if (this.classList.contains('spoiler')) {
                this.classList.remove('spoiler');
                setTimeout(() => {
                    this.classList.add('spoiler');
                }, 1500)
            } else {
                this.classList.add('spoiler');
            }
        })
    }
}