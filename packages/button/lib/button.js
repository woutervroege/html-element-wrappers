import { Properties } from 'html-element-property-mixins';
import { StringConverter, NumberConverter, BooleanConverter } from 'html-element-property-mixins/src/utils/attribute-converters';
import { html, render as litRender} from 'lit-html';
export { html } from 'lit-html';

export class HTMLButtonElement extends Properties(HTMLElement) {
  
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

    }

  }

  constructor() {
    super();
    this.attachShadow({mode: 'open', delegatesFocus: true});
    this.tabIndex = 0;
    this.accessKey = '';
    this.value = '';
    this.render();
    this.__initFocusDelegation();
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

  get type() {
    return this._type || 'submit';
  }

  set type(val) {
    const type = val.toLowerCase();
    const types = ['button', 'submit', 'reset'];
    if(types.indexOf(type) === -1) return this._type = 'submit';
    this._type = type;
  }

  propertyChangedCallback(propName, oldValue, newValue) {
    super.propertyChangedCallback(propName, oldValue, newValue);
    this.render();
  }

  get styles() {
    return html`
      <style>
        :host { outline: none }
      </style>
    `
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
    `
  }

  render() {
    window.cancelAnimationFrame(this._renderDebouncer);
    this._renderDebouncer = window.requestAnimationFrame(() => {
      litRender(this.template, this.shadowRoot, {eventContext: this})  
    })
  }

  get willValidate() {
    return this.$button.willValidate();
  }

  get validationMessage() {
    return this.$button.validationMessage();
  }

  get validity() {
    return this.$button.validity();
  }

  checkValidity()	{
    return this.$button.checkValidity();
  }

  reportValidity() {
    return this.$button.reportValidity();
  }

  setCustomValidity(val) {
    this.$button.setCustomValidity(val);
  }

  get $button() {
    return this.shadowRoot.querySelector('button');
  }

  __initFocusDelegation() {
    if(this.shadowRoot.delegatesFocus) return;
    this.addEventListener('focus', () => this.$button.focus());
  }

}