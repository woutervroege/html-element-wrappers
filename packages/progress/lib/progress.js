import { Properties } from 'html-element-property-mixins';
import { PropertiesChangedCallback } from 'html-element-property-mixins/src/addons';
import { NumberConverter } from 'html-element-property-mixins/src/utils/attribute-converters';
import { html, render as litRender} from 'lit-html/lib/shady-render';
export { html } from 'lit-html';

export class HTMLProgressElement extends PropertiesChangedCallback(Properties(HTMLElement)) {
  
  static get properties() {

    return {

      max: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      value: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      }

    };

  }

  constructor() {
    super();

    const $element = document.createElement('progress');
    this.max = $element.max;
    this.value = $element.value;

    this.attachShadow({mode: 'open'});
    this.render();
  }

  propertiesChangedCallback(propName, oldValue, newValue) {
    super.propertiesChangedCallback && super.propertiesChangedCallback(propName, oldValue, newValue);
    this.render();
  }

  get styles() {
    return html`
      <style></style>
    `;
  }

  get template() {
    return html`
      ${this.styles}
      <progress
        .max="${this.max}"
        .value="${this.value}"
      ></progress>
    `;
  }

  render() {
    litRender(this.template, this.shadowRoot, {eventContext: this, scopeName: this.localName});
  }

  get max() {
    return this._max;
  }

  set max(max) {
    this._max = Number(max);
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = Number(value);
  }

  get position() {
    return this.$element.position;
  }

  get $element() {
    return this.shadowRoot.querySelector('progress');
  }

}