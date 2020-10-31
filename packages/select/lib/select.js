import { Properties } from 'html-element-property-mixins';
import { StringConverter, NumberConverter, BooleanConverter } from 'html-element-property-mixins/src/utils/attribute-converters';
import { html, render as litRender} from 'lit-html/lib/shady-render';
export { html } from 'lit-html';

export class HTMLSelectElement extends Properties(HTMLElement) {
  
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

      length: {
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

      name: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      required: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      selectedIndex: {
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

      size: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

    };

  }

  constructor() {
    super();

    const $element = document.createElement('select');
    this.accessKey = $element.accessKey;
    this.autofocus = $element.autofocus;
    this.disabled = $element.disabled;
    this.length = $element.length;
    this.multiple = $element.multiple;
    this.name = $element.name;
    this.selectedIndex = $element.selectedIndex;
    this.size = $element.size;
    this.tabIndex = $element.tabIndex;
    this.required = $element.required;

    this.attachShadow({mode: 'open', delegatesFocus: this.__delegatesFocus});
    this.render();
    if(!this.__delegatesFocus) this.addEventListener('focus', () => this.$element.focus());
    this.__initMutationObserver();
  }
  
  propertyChangedCallback(propName, oldValue, newValue) {
    super.propertyChangedCallback(propName, oldValue, newValue);
    this.render();
  }

  get styles() {
    return html`
      <style>
        :host { outline: none; }
        ::slotted(option) { display: none; }
      </style>
    `;
  }

  get template() {
    return html`
      ${this.styles}
      <select
        .accessKey="${this.accessKey}"
        ?autofocus="${this.autofocus}"
        ?disabled="${this.disabled}"
        .length="${this.length}"
        ?multiple="${this.multiple}"
        .name="${this.name}"
        .selectedIndex="${this.selectedIndex}"
        .size="${this.size}"
        .tabIndex="${this.tabIndex}"
        ?required="${this.required}"
        @input="${this.__handleInput}"
        @change="${this.__handleChange}"
      ></select>
      <slot @slotchange="${this.__handleSlotChange}"></slot>
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

  get labels() {
    return this.$element.labels;
  }

  get name() {
    return this.$element.name || '';
  }

  get options() {
    return this.$element.options;
  }

  get selectedOptions() {
    return this.$element.selectedOptions;
  }

  get tabIndex() {
    return this.disabled === true ? -1 : this._tabIndex;
  }

  set tabIndex(val) {
    this._tabIndex = parseInt(val);
  }

  get type() {
    return this.$element.type;
  }

  get value() {
    return this.$element.value;
  }

  get willValidate() {
    return this.$element.willValidate();
  }

  get validationMessage() {
    return this.$element.validationMessage();
  }

  get validity() {
    return this.$element.validity();
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
    return this.shadowRoot.querySelector('select');
  }

  get __delegatesFocus() {
    const _div = document.createElement('div');
    _div.attachShadow({ mode: 'open', delegatesFocus: true });
    return _div.shadowRoot.delegatesFocus || false;
  }

  __handleSlotChange() {
    if(!this.$element) return;
    this.$element.innerHTML = this.innerHTML;
    this.$element.selectedIndex = this.selectedIndex;
  }

  __initMutationObserver() {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(this.__handleSlotChange.bind(this));
    observer.observe(this, config);
  }

  __handleInput(e) {
    this.selectedIndex = e.target.selectedIndex;
  }

  __handleChange(e) {
    this.selectedIndex = e.target.selectedIndex;
    this.dispatchEvent(new CustomEvent('change', {bubbles: true, composed: true}));
  }

}