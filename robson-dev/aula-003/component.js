/*
WEBCOMPONENTS
 
  SHADOW DOM
    Modo Open:
      - Quando o shadow root é criado com o modo "open", o shadow DOM pode ser 
        acessado através da propriedade shadowRoot do elemento host.

      - Isso significa que outros scripts podem acessar e manipular o 
        conteúdo do shadow tree diretamente.
    
    Modo Closed:
      - No modo "closed", o shadow root não pode ser acessado diretamente 
        através da propriedade shadowRoot do elemento host.

      - Isso proporciona um maior nível de encapsulamento, pois impede 
        que scripts externos acessem o conteúdo do shadow tree.
    
    Resumindo: Em resumo, o modo open permite acesso externo ao shadow DOM, 
    enquanto o modo closed protege o conteúdo do shadow tree de acessos externos.

    obs.: Posso criar um shadow root dentro de outro shadow root
*/

class MyComponent extends HTMLElement {

  // Ciclo de vida 1: Incializando o componente
  constructor () {
    super();

    this.attachShadow({ mode: 'open' })

    // Verificando se o atributo existe.
    let conteudo = 'CONTEÚDO';
    let titulo = 'TITULO';

    if (this.hasAttribute('titulo')) titulo = this.getAttribute('titulo');

    if (this.hasAttribute('conteudo')) conteudo = this.getAttribute('conteudo');

    this.shadowRoot.innerHTML = `
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
        
        :host-context(div) p {
          font-size: 2rem;
        }
      </style>
      <h1>${titulo}</h1>
      <p>${conteudo}</p>
    `;
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