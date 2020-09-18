import { Properties } from 'html-element-property-mixins';
import { PropertiesChangedCallback } from 'html-element-property-mixins/src/addons';
import { StringConverter, NumberConverter, BooleanConverter } from 'html-element-property-mixins/src/utils/attribute-converters';
import { html, render as litRender} from 'lit-html/lib/shady-render';
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

    this.attachShadow({mode: 'open', delegatesFocus: this.__delegatesFocus});
    this.render();
    if(!this.__delegatesFocus) this.addEventListener('focus', () => this.$element.focus())
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
    window.requestAnimationFrame(() => {
      litRender(this.template, this.shadowRoot, {eventContext: this, scopeName: this.localName});  
    });
  }

  get accessKey() {
    return this._accessKey;
  }

  set accessKey(val) {
    this._accessKey = val;
  }

  get tabIndex() {
    return this.disabled === true ? -1 : this._tabIndex;
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

  get __delegatesFocus() {
    const _div = document.createElement('div');
    _div.attachShadow({ mode: 'open', delegatesFocus: true });
    return _div.shadowRoot.delegatesFocus || false; 
  }


}