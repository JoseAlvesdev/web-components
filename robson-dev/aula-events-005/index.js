/*
WEBCOMPONENTS
  
  EVENTS
    Criando elementos customizaveis.

    Ex.1:
    btn.addEventListener('click', () => {
      const event = new Event('click-evt', {
        // Define que os elementos pais e avos escutem esse evento
        bubbles: true,
        // Restringe esse evento somente a esse componente
        composed: true,
      });
      this.shadowRoot.dispatchEvent(event);
    });

    Ex.2:
     btn.addEventListener('click', () => {
      this.count++;
      const event = new CustomEvent('click-evt', {
        // Define que os elementos pais e avos escutem esse evento
        bubbles: true,
        // Restringe esse evento somente a esse componente
        composed: true,
        // Informa detalhes do evento
        detail: this.count
      });
      this.shadowRoot.dispatchEvent(event);
    });



*/

class EventsComponent extends HTMLElement {
  constructor () {
    super();

    this.attachShadow({ mode: 'open' });

    const btn = document.createElement('button');
    btn.innerText = 'Disparar Evento';

    this.count = 0;

    // Criando evento customizado
    btn.addEventListener('click', () => {
      this.count++;
      const event = new CustomEvent('click-evt', {
        // Define que os elementos pais e avos escutem esse evento
        bubbles: true,
        // Restringe esse evento somente a esse componente
        composed: true,
        // Informa detalhes do evento
        detail: this.count
      });
      this.shadowRoot.dispatchEvent(event);
    });

    this.shadowRoot.addEventListener('click-evt', (event) => {
      console.log('Clicou o evento click-evt! Foi clicado: ' + event.detail);
    })

    this.shadowRoot.appendChild(btn);
  }
}

customElements.define('evt-comp', EventsComponent);