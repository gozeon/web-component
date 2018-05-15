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
import '../node_modules/@polymer/iron-input/iron-input.js';
import './shared-styles.js';

class NameTag extends PolymerElement {
  constructor() {
    super();

    this.owner = 'goze';
  }

  static get template() {
    return html`
      <h1>Hello {{ owner }}</h1>
    `
  }
}

window.customElements.define('name-tag', NameTag);

class ConfigurableNameTag extends PolymerElement {
  static get properties() {
    return {
      owner : {
        type: String,
        value: ''
      }
    }
  }

  static get template() {
    return html`
      <h1>The tag property is [[ owner ]]</h1>
    `
  }
}

window.customElements.define('configurable-name-tag', ConfigurableNameTag);

class EditableNameTag extends PolymerElement {
  static get properties() {
    return {
      owner: {
        type: String,
        value: 'goze'
      }
    }
  }

  static get template() {
    return html`
      <p>This is <b>[[owner]]</b>'s name-tag element.</p>
      <iron-input bind-value="{{owner}}">
        <input is="iron-input" placeholder="Your name here...">
      </iron-input>
    `
  }
}

window.customElements.define('editable-name-tag', EditableNameTag);

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>View Two</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
      </div>
      
      <div class="card">
        <h1>Data Binding</h1>
        <name-tag></name-tag>
        <configurable-name-tag owner="goze"></configurable-name-tag>
        <editable-name-tag></editable-name-tag>
        <editable-name-tag owner="Tom"></editable-name-tag>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
