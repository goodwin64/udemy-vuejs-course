new Vue({
  el: '#exercise',
  data: {
    isEffectActive: false,
    class3: '',
    class41: '',
    class42enabled: false,
    style5: '',
    durationInSeconds: 3,
    progressBarCurrentValue: 0,
    progressInterval: null,
  },
  methods: {
    toggleEffect: function () {
      const effect = document.querySelector('#effect');
      effect.classList.toggle('effectActive');
      this.isEffectActive = !this.isEffectActive;

      /*
      via JS
      setInterval(() => {
        effect.classList.toggle('highlight');
      }, 1000);

      setTimeout(() => {
        setInterval(() => {
          effect.classList.toggle('shrink');
        }, 1000);
      }, 1000);
      */
    },
    startProgress() {
      if (this.progressInterval) {
        return;
      }

      this.progressInterval = setInterval(() => {
        if (this.progressBarCurrentValue < 100) {
          this.progressBarCurrentValue++;
        }
      }, this.durationInSeconds * 10);
    },
    resetProgress() {
      this.progressBarCurrentValue = 0;
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    },
  },
  computed: {
    class4: function () {
      return [this.class41, this.class42enabled ? 'class42' : ''];
    },
    progressBarStyles: function () {
      const ratio = this.progressBarCurrentValue / 100;
      return {
        width: this.progressBarCurrentValue + '%',
        backgroundColor: `rgb(${(1 - ratio) * 255}, ${ratio * 255}, 64)`,
      };
    },
  },
});
