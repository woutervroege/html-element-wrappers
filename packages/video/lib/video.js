import { HTMLMediaElement } from '../../media';
import { html, render as litRender} from 'lit-html/lib/shady-render';
export { html } from 'lit-html';

export class HTMLVideoElement extends HTMLMediaElement {
  
  static get properties() {

    const props = {
      poster: {
        observe: true,
        DOM: true,
        reflect: true
      },
    };

    return {...super.properties, ...props};

  }

  constructor() {
    super();

    const $element = document.createElement('video');
    this.poster = $element.poster;
    this.attachShadow({mode: 'open', delegatesFocus: true});
  }

  get videoHeight() {
    return this.$element.videoHeight;
  }

  get videoWidth() {
    return this.$element.videoWidth;
  }
  
  propertyChangedCallback(propName, oldValue, newValue) {
    super.propertyChangedCallback(propName, oldValue, newValue);
    if(!this.shadowRoot) return;
    this.render();
    if(propName === 'currentTime' && this.$element) this.$element.currentTime = this.currentTime;
  }
  
  get styles() {
    return html`
      <style></style>
    `;
  }
  
  get template() {
    return html`
      ${this.styles}
      <video
        .accessKey="${this.accessKey}"
        ?autoplay="${this.autoplay}"
        ?controls="${this.controls}"
        .crossOrigin="${this.crossOrigin}"
        ?defaultMuted="${this.defaultMuted}"
        .defaultPlaybackRate="${this.defaultPlaybackRate}"
        ?disableRemotePlayback="${this.disableRemotePlayback}"
        ?loop="${this.loop}"
        .mediaGroup="${this.mediaGroup}"
        ?muted="${this.muted}"
        .preload="${this.preload}"
        .src="${this.src}"
        .srcObject="${this.srcObject}"
        .tabIndex="${this.tabIndex}"
        .volume="${this.volume}"
        @abort="${this.__bubbleEvent}"
        @canplay="${this.__bubbleEvent}"
        @canplaythrough="${this.__bubbleEvent}"
        @durationchange="${this.__bubbleEvent}"
        @emptied="${this.__bubbleEvent}"
        @ended="${this.__bubbleEvent}"
        @error="${this.__bubbleEvent}"
        @loadeddata="${this.__bubbleEvent}"
        @loadedmetadata="${this.__bubbleEvent}"
        @loadstart="${this.__bubbleEvent}"
        @pause="${this.__bubbleEvent}"
        @play="${this.__bubbleEvent}"
        @playing="${this.__bubbleEvent}"
        @progress="${this.__bubbleEvent}"
        @ratechange="${this.__bubbleEvent}"
        @seeked="${this.__bubbleEvent}"
        @seeking="${this.__bubbleEvent}"
        @stalled="${this.__bubbleEvent}"
        @suspend="${this.__bubbleEvent}"
        @timeupdate="${this.__bubbleEvent}"
        @volumechange="${this.__bubbleEvent}"
        @waiting="${this.__bubbleEvent}"
      ><slot></slot>
      </video>
    `;
  }
  
  render() {
    window.cancelAnimationFrame(this._renderDebouncer);
    this._renderDebouncer = window.requestAnimationFrame(() => {
      litRender(this.template, this.shadowRoot, {eventContext: this, scopeName: this.localName});
    });  
  }
  
  get $element() {
    return this.shadowRoot && this.shadowRoot.querySelector('video');
  }
  
  __initFocusDelegation() {
    if(this.shadowRoot.delegatesFocus) return;
    this.addEventListener('focus', () => this.$element.focus());
    this.addEventListener('click', () => this.$element.focus());
  }

}