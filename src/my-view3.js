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
import '@polymer/polymer/lib/elements/dom-repeat.js'
import './shared-styles.js';

class EmployeeList extends PolymerElement {
  constructor() {
    super();
    this.employees = [
      {first: 'Bob', last: 'Li'},
      {first: 'Ayesha', last: 'Johnson'},
      {first: 'Fatma', last: 'Kumari'},
      {first: 'Tony', last: 'Mori'}
    ];
  }

  static get template() {
    return html`
      <div> Employee list: </div>
      <p></p>
      <template is="dom-repeat" items="{{employees}}">
        <div>First name: <span>{{item.first}}</span></div>
        <div>Last name: <span>{{item.last}}</span></div>
        <p>--------------------------------------------</p>
    </template>
    `
  }
}

customElements.define('employee-list', EmployeeList);

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>
      <div class="card">
        <employee-list></employee-list>
      <div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
