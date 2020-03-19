import { Properties } from 'html-element-property-mixins';
import { PropertiesChangedCallback } from 'html-element-property-mixins/src/addons';
import { StringConverter, NumberConverter, BooleanConverter } from 'html-element-property-mixins/src/utils/attribute-converters';
import { html, render as litRender} from 'lit-html';
export { html } from 'lit-html';

export class HTMLButtonElement extends PropertiesChangedCallback(Properties(HTMLElement)) {
  
  static get properties() {

    return {
      
      accessKey: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      autofocus: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      disabled: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      tabIndex: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      type: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      value: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      }

    };

  }

  constructor() {
    super();

    const $element = document.createElement('button');
    this.accessKey = $element.accessKey;
    this.autofocus = $element.autofocus;
    this.disabled = $element.disabled;
    this.tabIndex = $element.tabIndex;
    this.type = $element.type;
    this.value = $element.value;

    this.attachShadow({mode: 'open', delegatesFocus: true});
    this.render();
    this.__initFocusDelegation();
  }

  get type() {
    return this._type || 'submit';
  }

  set type(val) {
    const type = val.toLowerCase();
    const types = ['button', 'submit', 'reset'];
    if(types.indexOf(type) === -1) return this._type = 'submit';
    this._type = type;
  }

  propertiesChangedCallback(propName, oldValue, newValue) {
    super.propertiesChangedCallback && super.propertiesChangedCallback(propName, oldValue, newValue);
    this.render();
  }

  get styles() {
    return html`
      <style>
        :host { outline: none }
      </style>
    `;
  }

  get template() {
    return html`
      ${this.styles}
      <button
        .accessKey="${this.accessKey}"
        ?autofocus="${this.autofocus}"
        ?disabled="${this.disabled}"
        .tabIndex="${this.tabIndex}"
        .type="${this.type}"
        .value="${this.value}"
      ><slot></slot></button>
    `;
  }

  render() {
    litRender(this.template, this.shadowRoot || this, {eventContext: this});  
  }

  get accessKey() {
    return this._accessKey;
  }

  set accessKey(val) {
    this._accessKey = val;
  }

  get tabIndex() {
    return this._tabIndex;
  }

  set tabIndex(val) {
    this._tabIndex = parseInt(val);
  }

  get validationMessage() {
    return this.$element.validationMessage();
  }

  get validity() {
    return this.$element.validity();
  }

  get willValidate() {
    return this.$element.willValidate();
  }

  checkValidity()	{
    return this.$element.checkValidity();
  }

  reportValidity() {
    return this.$element.reportValidity();
  }

  setCustomValidity(val) {
    this.$element.setCustomValidity(val);
  }

  get $element() {
    return this.shadowRoot.querySelector('button');
  }

  __initFocusDelegation() {
    if(this.shadowRoot.delegatesFocus) return;
    this.addEventListener('focus', () => this.$element.focus());
    this.addEventListener('click', () => this.$element.focus());
  }

}