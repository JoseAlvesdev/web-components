/*
WEBCOMPONENTS
  Ao nomear o nosso component e obrigatório, a separação de duas palavras por hífen " - "

  UTILIZANDO CONTEÚDO DINÂMICO

    1ª Forma:
      this.innerHTML = `
        <h1>Meu Component</h1>
        <p>Parágrafo</p>
      `;
    
    2ª Forma:
      const h1 = document.createElement('h1');
      h1.innerText = 'Meu Componente';
      this.appendChild(h1);

    3ª Forma:
      const html = `<h1>Meu Componente</h1>`;
      const conteudoHTML = new DOMParser().parseFromString(html, 'text/html');
      console.log(conteudoHTML);
      this.innerHTML = conteudoHTML.body.innerHTML;
      
*/

class MyComponent extends HTMLElement {

    constructor () {
        super();

        const html = `<h1>Meu Componente</h1>`;
        const conteudoHTML = new DOMParser().parseFromString(html, 'text/html');
        console.log(conteudoHTML);
        this.innerHTML = conteudoHTML.body.innerHTML;
    }

}

customElements.define('my-component', MyComponent);