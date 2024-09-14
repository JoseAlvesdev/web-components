/*
WEBCOMPONENTS
 
  RESGATANDO ATRIBUTOS

  Exemplo 1:
    // Verificando se o atributo existe.
    let conteudo = 'CONTEÚDO';

    if (this.hasAttribute('conteudo')) {
      conteudo = this.getAttribute('conteudo');
      console.log(conteudo);
    }

    this.innerHTML = `
      <h1>Meu Component</h1>
      <p>${conteudo}</p>
    `;

  CICLO DE VIDA
    
      
*/

class MyComponent extends HTMLElement {

  // Ciclo de vida 1: Incializando o componente
  constructor () {
    super();
    
    console.log('Chamou o construtor')

    // Verificando se o atributo existe.
    let conteudo = 'CONTEÚDO';

    if (this.hasAttribute('conteudo')) conteudo = this.getAttribute('conteudo');

    this.innerHTML = `
      <h1>Meu Component</h1>
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