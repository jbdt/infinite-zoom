document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const prefix = "a";
    const startAt = 1;
    const extension = "png";
    const images = 4;
    const speed = urlParams.get('speed') || 1;

    const slow = 4 / speed;
    const container = document.createElement('div');
    container.style.display = 'none';

    function createImages(i) {
      const img = new Image();
      img.src = `img/${prefix}${i+startAt}.${extension}`;
      container.appendChild(img);
    }
    
    for (let i = 0; i < images; i++) {createImages(i);}

    function showContainerAndAnimate() {
      document.body.appendChild(container);
      for (let i = 0; i < images; i++) {
        const element = document.createElement('div');
        element.classList.add('zoom');
        element.style.backgroundImage = `url('img/${prefix}${i + startAt}.${extension}')`;
        document.body.appendChild(element);
        addAnimation(element, slow * (i - 4), slow * (i - 4));
      }
    }
    showContainerAndAnimate();

    function addAnimation(element, delayHidden, delayFinalScale) {
      element.style.animation = `stayHidden ${slow * 4}s ${delayHidden}s infinite,
        finalScale ${slow * 4}s ${delayFinalScale}s cubic-bezier(0.66, 0.5, 0.5, 0.33) infinite`;
    }
  }, "100");
});