import { HTMLMediaElement } from '../../media';
import { html, render as litRender} from 'lit-html';
export { html } from 'lit-html';

export class HTMLAudioElement extends HTMLMediaElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open', delegatesFocus: true});
    this.currentTime = 0;
    this.defaultPlaybackRate = 1;
    this.volume = 1;
    this.accessKey = '';
    this.value = '';
    this.render();
    this.__initFocusDelegation();
  }

  propertyChangedCallback(propName, oldValue, newValue) {
    super.propertyChangedCallback(propName, oldValue, newValue);
    this.render();
  }
  
  get styles() {
    return html`
      <style></style>
    `
  }
  
  get template() {
    return html`
      ${this.styles}
      <audio
        .accessKey="${this.accessKey}"
        ?autoplay="${this.autoplay}"
        ?controls="${this.controls}"
        .crossOrigin="${this.crossOrigin}"
        .currentTime="${this.currentTime}"
        ?defaultMuted="${this.defaultMuted}"
        .defaultPlaybackRate="${this.defaultPlaybackRate}"
        ?disableRemotePlayback="${this.disableRemotePlayback}"
        ?loop="${this.loop}"
        .mediaGroup="${this.mediaGroup}"
        ?muted="${this.muted}"
        .preload="${this.preload}"
        .src="${this.src}"
        .srcObject="${this.srcObject}"
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
      </audio>
    `
  }
  
  render() {
    window.cancelAnimationFrame(this._renderDebouncer);
    this._renderDebouncer = window.requestAnimationFrame(() => {
      litRender(this.template, this.shadowRoot, {eventContext: this})  
    })
  }
  
  get $element() {
    return this.shadowRoot.querySelector('audio');
  }
  
  __initFocusDelegation() {
    if(this.shadowRoot.delegatesFocus) return;
    this.addEventListener('focus', () => this.$element.focus());
  }

}