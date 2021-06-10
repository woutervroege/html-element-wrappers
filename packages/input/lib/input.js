import { Properties } from 'html-element-property-mixins';
import { StringConverter, NumberConverter, BooleanConverter } from 'html-element-property-mixins/src/utils/attribute-converters';
import { html, render as litRender} from 'lit-html/lib/shady-render';
export { html } from 'lit-html';

export class HTMLInputElement extends Properties(HTMLElement) {
  
  static get properties() {

    return {

      accept: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      accessKey: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      alt: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      autocomplete: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      autofocus: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      capture: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      checked: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      dirname: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      disabled: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      height: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      inputmode: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      max: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      maxlength: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      name: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      min: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      minlength: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      multiple: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      pattern: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      placeholder: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      readonly: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      required: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      size: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      src: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      step: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,        
      },

      width: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
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
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      __elementFocused: {
        observe: true
      }

    };

  }

  constructor() {
    super();

    const $element = document.createElement('input');
    this.accept = $element.accept;
    this.accessKey = $element.accessKey;
    this.alt = $element.alt;
    this.autocomplete = $element.autocomplete;
    this.autofocus = $element.autofocus;
    this.capture = $element.capture;
    this.checked = $element.checked;
    this.dirname = $element.dirname;
    this.disabled = $element.disabled;
    this.height = $element.height;
    this.inputmode = $element.inputmode;
    this.max = $element.max;
    this.maxlength = $element.maxlength;
    this.min = $element.min;
    this.minlength = $element.minlength;
    this.multiple = $element.multiple;
    this.name = $element.name;
    this.pattern = $element.pattern;
    this.placeholder = $element.placeholder;
    this.readonly = $element.readonly;
    this.required = $element.required;
    this.size = $element.size;
    this.src = $element.src;
    this.step = $element.step;
    this.tabIndex = $element.tabIndex;
    this.width = $element.width;
    this.type = $element.type;
    this.value = $element.value;
    this.__elementFocused = false;
    
    this.attachShadow({mode: 'open', delegatesFocus: this.__delegatesFocus});
    this.render();
    if(!this.__delegatesFocus) this.addEventListener('focus', () => this.$element.focus());
  }

  propertyChangedCallback(propName, oldValue, newValue) {
    super.propertyChangedCallback(propName, oldValue, newValue);
    this.render();
  }

  get styles() {
    return html`
      <style>
        :host { outline: none }

        input:invalid {
          border: 1px solid red;
        }
      </style>
    `;
  }

  get template() {
    return html`
      ${this.styles}
      <input
      .accept="${this.accept}"
      .accessKey="${this.accessKey}"
      .alt="${this.alt}"
      ?autocomplete="${this.autocomplete}"
      ?autofocus="${this.autofocus}"
      .capture="${this.capture}"
      ?checked="${this.checked}"
      .dirname="${this.dirname}"
      ?disabled="${this.disabled}"
      .height="${this.height}"
      .inputmode="${this.inputmode}"
      .max="${this.max}"
      maxlength="${this.maxlength}"
      .min="${this.min}"
      minlength="${this.minlength}"
      ?multiple="${this.multiple}"
      .name="${this.name}"
      .placeholder="${this.placeholder}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      .size="${this.size}"
      .src="${this.src}"
      .step="${this.step}"
      .tabIndex="${this.tabIndex}"
      .width="${this.width}"
      .type="${this.type}"
      .value="${this.value}"
      @focus="${() => this.__elementFocused = true}"
      @blur="${() => this.__elementFocused = false}"
      @input="${this.__handleInput}"
      @change="${this.__handleChange}"
      >
    `;
  }

  render() {
    if(this.__elementFocused===true) return;
    window.requestAnimationFrame(() => {
      litRender(this.template, this.shadowRoot, {eventContext: this, scopeName: this.localName});
      if(this.pattern) this.$element.setAttribute('pattern', this.pattern);
      else this.$element.removeAttribute('pattern');
    });
  }

  get accessKey() {
    return this._accessKey;
  }

  set accessKey(val) {
    this._accessKey = val;
  }

  get list() {
    return this.$element.list;
  }

  get tabIndex() {
    return this.disabled === true ? -1 : this._tabIndex;
  }

  set tabIndex(val) {
    this._tabIndex = parseInt(val);
  }

  get validationMessage() {
    return this.$element.validationMessage;
  }

  get validity() {
    return this.$element.validity;
  }

  get willValidate() {
    return this.$element.willValidate;
  }

  checkValidity()	{
    return this.$element.checkValidity();
  }

  reportValidity() {
    return this.$element.reportValidity();
  }

  select() {
    return this.$element.select();
  }

  setCustomValidity(val) {
    this.$element.setCustomValidity(val);
  }

  setRangeText() {
    this.$element.setRangeText(...arguments);
  }

  setSelectionRange() {
    this.$element.setSelectionRange(...arguments);
  }

  stepDown() {
    this.$element.stepDown();
    this.value = this.$element.value;
  }

  stepUp() {
    this.$element.stepUp();
    this.value = this.$element.value;
  }

  get $element() {
    if(!this.shadowRoot) return {};
    return this.shadowRoot.querySelector('input') || {};
  }

  get __delegatesFocus() {
    const _div = document.createElement('div');
    _div.attachShadow({ mode: 'open', delegatesFocus: true });
    return _div.shadowRoot.delegatesFocus || false;
  }
  
  __handleInput(e) {
    this.value = e.target.value;
    this.checked = e.target.checked;
  }

  __handleChange(e) {
    this.value = e.target.value;
    this.checked = e.target.checked;
    this.dispatchEvent(new CustomEvent('change', {bubbles: true, composed: true}));
  }

}
