import { Properties } from 'html-element-property-mixins';
import { StringConverter, NumberConverter, BooleanConverter } from 'html-element-property-mixins/src/utils/attribute-converters';
export { html } from 'lit-html';

export class HTMLMediaElement extends Properties(HTMLElement) {
  
  static get properties() {

    return {
      
      accessKey: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      autoplay: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      controls: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      crossOrigin: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      currentTime: {
        observe: true,
        DOM: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      defaultMuted: {
        observe: true,
        DOM: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      defaultPlaybackRate: {
        observe: true,
        DOM: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      disableRemotePlayback: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      loop: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      mediaGroup: {
        observe: true,
        DOM: true,
        fromAttributeConverter: StringConverter.fromAttribute,
        toAttributeConverter: StringConverter.toAttribute,
      },

      muted: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: BooleanConverter.fromAttribute,
        toAttributeConverter: BooleanConverter.toAttribute,
      },

      preload: {
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

      srcObject: {
        observe: true,
      },

      tabIndex: {
        observe: true,
        DOM: true,
        reflect: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

      volume: {
        observe: true,
        DOM: true,
        fromAttributeConverter: NumberConverter.fromAttribute,
        toAttributeConverter: NumberConverter.toAttribute,
      },

    };

  }

  constructor() {
    super();
    const $element = document.createElement('audio');
    this.accessKey = $element.accessKey;
    this.autoplay = $element.autoplay;
    this.controls = $element.controls;
    this.crossOrigin = $element.crossOrigin;
    this.currentTime = $element.currentTime;
    this.defaultMuted = $element.defaultMuted;
    this.defaultPlaybackRate = $element.defaultPlaybackRate;
    this.disableRemotePlayback = $element.disableRemotePlayback;
    this.loop = $element.loop;
    this.mediaGroup = $element.mediaGroup;
    this.muted = $element.muted;
    this.preload = $element.preload;
    this.src = $element.src;
    this.srcObject = $element.srcObject;
    this.volume = $element.volume;
  }

  get accessKey() {
    return this._accessKey;
  }

  set accessKey(val) {
    this._accessKey = val;
  }

  get buffered() {
    return this.$element.buffered;
  }

  get controlsList() {
    return this.$element.controlsList;
  }

  get currentSrc() {
    return this.$element.currentSrc;
  }

  get duration() {
    return this.$element.duration;
  }

  get ended() {
    return this.$element.ended;
  }

  get error() {
    return this.$element.error;
  }

  get networkState() {
    return this.$element.networkState;
  }

  get paused() {
    return this.$element.paused;
  }

  get played() {
    return this.$element.played;
  }

  get readyState() {
    return this.$element.readyState;
  }

  get seekable() {
    return this.$element.seekable;
  }

  get seeking() {
    return this.$element.seeking;
  }

  get tabIndex() {
    return this._tabIndex;
  }

  set tabIndex(val) {
    this._tabIndex = parseInt(val);
  }

  get textTracks() {
    return this.$element.textTracks;
  }

  get videoTracks() {
    return this.$element.videoTracks;
  }

  addTextTrack() {
    return this.$element.addTextTrack(...arguments);
  }

  canPlayType() {
    return this.$element.canPlayType(...arguments);
  }

  fastSeek() {
    return this.$element.fastSeek(...arguments);
  }

  load() {
    return this.$element.load();
  }

  pause() {
    return this.$element.pause(...arguments);
  }

  play() {
    return this.$element.play(...arguments);
  }

  __bubbleEvent(e) {
    e.stopPropagation();
    const evt = new CustomEvent(e.type, {...e.bubbles, ...e.cancelable, ...e.detail});
    this.dispatchEvent(evt);
  }

}