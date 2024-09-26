import { LitElement, html, css } from 'lit'; 

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "";
    this.link = "";
    this.image = null;
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
          display: inline-block;
      }

  :host([fancy]) {
  display: block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}
  
  .card {
  width: 136px;
  height:400px;
  border: 5px solid black;
  padding: 32px;
  margin: 24px;
  background-color: #D1FFBD;
  justify-content: center;
  }


#BJ {
  color:black;
  font-family: verdana;
  font-size: 25px;
  text-align:center;
  
  
}

.text {
  color: black;
  font-size:15px;
  font-family: Courier new;
  text-align:center;

}

#button {
  margin: 8px;
  padding:8px;
  font-size: 15px;
 
}

#button:hover {
  background-color:black;
  color:white;
}

.image1 {
  width: 85%;
}

`;
}

openChanged(e) {
  console.log(e.newState);
  if (e.newState === "open") {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

render() {
  return html` 
  <div class="card">
      <img class='image1' src=${this.image}>

      <h1 id="BJ">${this.name}</h1>

  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
        <div>
          <slot>${this.title}</slot>
        </div>
  </details>

 

      
      <a id="details" href="${this.link}">
          <button id="button">Details!</button>
      </a>
  
    </div>`;
}

static get properties() {
  return {
    name: { type: String },
    title: { type: String },
    description: { type: String},
    image: { type: String},
    link: { type: String},
    fancy: { type: Boolean, reflect: true },
  };
}

}

globalThis.customElements.define(MyCard.tag, MyCard);