/*
WEBCOMPONENTS
 
  SLOTS
    Passando elementos HTML para meu componente, com tags slots.

    obs.: elementos injeta via slot podem ser estilizados pelo dom principal e o mesmo tem preferência.

    Estilizando elementos especificos slots com o pseudo elemento
    ::sloted

    Ex.:
    ::slotted(ul) {
      color: gold;
    }
    
    Caso eu não nomeie os slots a precedencia e de forma posicionada.

    Ex. forma nomeada:
    COMPONENTE
    <slot name="lista"></slot>

    HTML
    <ul slot="lista">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>

  TEMPLATES

    1ª Forma de renderizar um template
      (TEMPLATE FORA DO COMPONENT)
      const template = document
        .querySelector('#template')
        .content.cloneNode(true);
    
      this.shadowRoot.appendChild(template);
    
    2ª Forma de renderizar um template
      (TEMPLATE DENTRO DO COMPONENT)
      const template = this
        .querySelector('template')
        .content.cloneNode(true);
      
      this.shadowRoot.appendChild(template);

    3ª Forma de renderizar um template
    (RENDERIZADO TOTALMENTE DO SERVIDOR)
    Declarar uma variavel escrever o template a ser renderizado

    this.shadowRoot.appendChild(template.content.cloneNode(true));




*/

const template = document.createElement('template');
template.innerHTML = `
  <style>
    h1 {
      color: blue;
    }

    :host {
      color: green;
    }
    
    /* Seleciona a raiz do shadowDom cujo filtro css corresponda */
    :host(.dois) h1 {
      text-transform: uppercase;
    }
    
    :host-context(div) {
      font-size: 2rem;
    }
    
    ::slotted(ul) {
      color: gold;
    }
  </style>
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
  </ul>

  <p>Meu parágrafo slot</p>
`;

class MyComponent extends HTMLElement {

  // Ciclo de vida 1: Incializando o componente
  constructor () {
    super();

    this.attachShadow({ mode: 'open' });

    console.log(template)

    this.shadowRoot.innerHTML = `<h1>Meu título</h1>`;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Ciclo de vida 2: Carrega os atributos Reagindo as mudanças nos 
  // atributos (se houver)
  attributeChangedCallback (name, oldVal, newVal) {
    console.log(name, oldVal, newVal);
  }

  static get observedAttributes () {
    return ['conteudo'];
  }

  // Ciclo de vida 2.1 Conectando a árvore DOM
  connectedCallback () {
    console.log('Chamou o connectedCallback');
  }

  // Ciclo de vida 3: Desconectando a árvore DOM
  disconnectedCallback () {
    console.log('Chamou o disconnectedCallback');
  }

}

customElements.define('my-component', MyComponent);