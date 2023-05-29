"use strict";
const postTemplate = document.createElement("template");
postTemplate.innerHTML = `
  <style>
   div {
    border-radius: 20px;
    margin: 20px;
    padding: 20px;
    background-color: #FFF4E2;
    box-shadow: 5px 5px gray;
    color: #9b6F39;
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    font-style: bold;
    font-weight: 700;
    }
   
  </style>
  <div class="rounded-lg border-light-100">
    <slot ></slot>
  </div>
  `;
//everything in slot, the style won't be affected outside
//we can make multiple slot
class postElement extends HTMLElement {
    constructor() {
        super();
        this.details = this.getAttribute('details') || '';
        const shadow = this.attachShadow({ mode: "open" });
        this.innerHTML = this.details;
        shadow.append(postTemplate.content.cloneNode(true));
    }
    connectedCallBack() {
        console.log("connectedCallBack");
        // this.attachShadow({mode: "open"})
        // const wrapper = document.createElement("span")
        // this.details = this.getAttribute('details') || ''
        // console.log(this.details || 'nth haha')
        // wrapper.innerHTML = `${this.details}`
        // this.shadowRoot?.append(wrapper)
    }
    render() {
        // console.log(this.details || 'nth haha')
    }
}
// function addPostElement(){
customElements.define("post-element", postElement);
//     console.log("Added Post element")
// }
// addPostElement()
//# sourceMappingURL=post.js.map