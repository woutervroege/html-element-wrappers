import { Properties } from 'html-element-property-mixins';
import { StringConverter, BooleanConverter } from 'html-element-property-mixins/src/utils/attribute-converters';
import { html, render as litRender} from 'lit-html';
export { html } from 'lit-html';

export class HTMLImageElement extends Properties(HTMLElement) {
  
  static get properties() {

    return {
      alt: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      crossOrigin: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      decoding: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      isMap: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      referrerPolicy: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },    

      src: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      srcSet: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      useMap: {
        observe: true,
        DOM: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

    };

  }

  constructor() {
    super();
    this.alt = '';
    this.decoding = 'auto';
    this.referrerPolicy = '';
    this.src = '';
    this.srcSet = '';
    this.useMap = '';
    this.height = '';
    this.width = '';

    this.attachShadow({mode: 'open', delegatesFocus: true});
    this.render();
    this.__initFocusDelegation();
  }

  get complete() {
    return this.$element.complete;
  }

  get currentSrc() {
    return this.$element.currentSrc;
  }

  get naturalHeight() {
    return this.$element.naturalHeight;
  }

  get naturalWidth() {
    return this.$element.naturalWidth;
  }

  get x() {
    return this.$element.x;
  }

  get y() {
    return this.$element.y;
  }

  propertyChangedCallback(propName, oldValue, newValue) {
    super.propertyChangedCallback(propName, oldValue, newValue);
    this.render();
  }

  get styles() {
    return html`
      <style>
        :host {
          display: inline;
        }
      </style>
    `;
  }

  get template() {
    return html`
      ${this.styles}
      <img
      .alt="${this.alt}"
      .crossOrigin="${this.crossOrigin}"
      .decoding="${this.decoding}"
      ?isMap="${this.isMap}"
      .referrerPolicy="${this.referrerPolicy}"
      .src="${this.src}"
      .srcSet="${this.srcSet}"
      .useMap="${this.useMap}"
      >
    `;
  }

  render() {
    window.cancelAnimationFrame(this._renderDebouncer);
    this._renderDebouncer = window.requestAnimationFrame(() => {
      litRender(this.template, this.shadowRoot, {eventContext: this});  
    });
  }

  get $element() {
    return this.shadowRoot.querySelector('img');
  }

  __initFocusDelegation() {
    if(this.shadowRoot.delegatesFocus) return;
    this.addEventListener('focus', () => this.$element.focus());
  }

}