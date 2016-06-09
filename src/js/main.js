import 'gsap';
import ScrollMagic from 'scrollmagic';
import Flickity from 'flickity';
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

let app = {
  init: function() {
    this.bindUIActions();
  },

  bindUIActions: function() {
    this.registerParallax();
    this.registerSlider();
  },

  registerParallax: function() {
    var controller = new ScrollMagic.Controller();
    // build tween
    var tween = new TimelineMax ()
    .add([
      TweenMax.fromTo("#layer_1", 1, {top: 300}, {top: -500, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_2", 1, {top: 100}, {top: -200, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_3", 1, {top: 50}, {top: -200, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_4", 1, {top: 350}, {top: 100, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_5", 1, {top: 400}, {top: 100, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_6", 1, {top: 600}, {top: -100, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_7", 1, {top: 350}, {top: 100, ease: Linear.easeNone})
    ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".piri", duration: document.body.clientHeight})
    .setTween(tween)
  //  .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  },

  registerNewsletter: function() {

  },

  registerSlider : function() {
    var elem = document.getElementById('slider');
    var flkty = new Flickity( elem, {
      // options,
      contain: true,
      freeScroll: true,
      autoPlay: true,
      prevNextButtons: false,
      pageDots: false
    });
  }
};

app.init();
