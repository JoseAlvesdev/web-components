export default class ProfileCard extends HTMLElement {
    name = 'Unknown';
    photo = 'https://via.placeholder.com/150';
    mounted = false;
    btnEl = null;
    infoEl = null;
    collapsed = false;

    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
        this.name = this.getAttribute('name') || this.name
        this.photo = this.getAttribute('photo') || this.photo
        this.render();
    }

    get style() {
        return `
            .profile-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 14em;
                border: 1px solid gray;
                border-radius: .5em;
            }

            h3, p {
                margin: 5px 0;
            }
            
            img {
                width: 50%;
                border-radius: 50%;
                margin-top: 1em;
            }

            .profile-info {
                text-align: center;
            }
            
            button {
                cursor: pointer;
                background: grey;
                font-size: 12px;
                color: #fff;
                border: 0;
                border-radius: 2em;
                padding: 5px 10px;
                margin-bottom: 1em;
            }
        `;
    }

    get template() {
        return `
            <style>
                ${this.style}
            </style>
            <div class="profile-card">
                <img src="${this.photo}" alt="profile photo" />
                <h3>${this.name}</h3>
                <div class="profile-info">
                    <slot name="email"></slot>
                    <slot name="phone"></slot>
                </div>
                <button>hide details</button>
            </div>
        `;
    }

    static get observedAttributes() {
        return ['name', 'photo'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue)
        if (!this.mounted) return;

        switch (name) {
            case "name":
                this.name = newValue;
                break;

            case "photo":
                this.photo = newValue;
                break;
            
            default:
                break;
        }
    }

    connectedCallback() {
        this.mounted = true;
        this.infoEl = this.shadowRoot.querySelector('.profile-info');
        this.btnEl = this.shadowRoot.querySelector('button');
        this.btnEl.addEventListener('click', () => {
            this.collapsed = !this.collapsed;

            if (this.collapsed) {
                this.infoEl.style.display = 'none';
                this.btnEl.innerText = 'show details';
            } else {
                this.infoEl.style.display = 'block';
                this.btnEl.innerText = 'hide details'
            }
        })
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}