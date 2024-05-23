document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const prefix = "frames";
    const startAt = 0;
    const extension = "png";
    const images = 4;
    const speed = urlParams.get('speed') || 1;

    const slow = 1 / speed;
    const numImages = images + 2;
    const container = document.createElement('div');
    container.style.display = 'none';

    function createImages(i) {
      const img = new Image();
      img.src = `img/${prefix}${i+startAt}.${extension}`;
      container.appendChild(img);
    }
    
    for (let i = 0; i < images; i++) {createImages(i);}
    for (let i = 0; i < 2; i++) {createImages(i);}

    function showContainerAndAnimate() {
      document.body.appendChild(container);
      for (let i = 0; i < numImages; i++) {
        const element = document.createElement('div');
        element.classList.add('zoom');
        imgNumber = i + 2 < numImages ? i + startAt : i - numImages + 2;
        element.style.backgroundImage = `url('img/${prefix}${imgNumber}.${extension}')`;
        document.body.appendChild(element);
        addAnimation(element, slow * 4 * (i - 2), slow * 4 * (i - 2), "finalScale");
      }
    }
    showContainerAndAnimate();

    function addAnimation(element, delayHidden, delayFinalScale, animationScale) {
      element.style.animation = `stayHidden ${delayHidden}s, ${animationScale} ${slow * 16}s ${delayFinalScale}s cubic-bezier(0.66, 0.5, 0.5, 0.33)`;
    }
    setInterval(() => {
      var zoomDivs = document.querySelectorAll('div.zoom');
      for (var i = 0; i < zoomDivs.length; i++) {
        var zoomDiv = zoomDivs[i];
        zoomDiv.parentNode.removeChild(zoomDiv);
      }
      showContainerAndAnimate();
    }, ((numImages - 2) * 4 * slow) * 1000);
  }, "100");
});