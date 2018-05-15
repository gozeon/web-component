/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class CustomElement extends PolymerElement{
  constructor() {
    super();
    this.textContent = 'my is a customElement';
  }
}

window.customElements.define('custom-element', CustomElement);

class ShadowElement extends PolymerElement{
  static get template() {
    return html`
      <h1>my is a shadow dom</h1>
    `
  }
}

window.customElements.define('shadow-element', ShadowElement);

class ComposeShadow extends PolymerElement {
  static get template(){
    return html`
      <h1>use slot</h1>
      <slot></slot>
    `
  }
}

window.customElements.define('compose-shadow', ComposeShadow);

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>View One</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>
      
      <div class="card">
        <h1>Register an element</h1>
        <custom-element></custom-element>
        <shadow-element></shadow-element>
        <compose-shadow>
          <img src="https://www.polymer-project.org/images/logos/p-logo-32.png">
        </compose-shadow>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
