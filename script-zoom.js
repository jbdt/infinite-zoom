document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const prefix = "ai";
    const startAt = 0;
    const extension = "png";
    const numImages = 9;
    const slow = 1;
    const container = document.createElement('div');
    container.style.display = 'none';

    for (let i = 0; i < numImages; i++) {
      const img = new Image();
      img.src = `img/${prefix}${i+startAt}.${extension}`;
      container.appendChild(img);
    }

    function showContainerAndAnimate() {
      document.body.appendChild(container);
      for (let i = 0; i < numImages; i++) {
        const element = document.createElement('div');
        element.classList.add('zoom');
        element.style.backgroundImage = `url('img/${prefix}${i+startAt}.${extension}')`;
        document.body.appendChild(element);
        switch (i) {
          case 0:
            addAnimation(element, 0, 0, "aplhaScale");
            break;
          case 1:
            addAnimation(element, 0, 0, "betaScale");
            break;
          default:
            addAnimation(element, slow * 4 * (i - 2), slow * 4 * (i - 2), "finalScale");
        }
      }
    }
    showContainerAndAnimate();

    function addAnimation(element, delayHidden, delayFinalScale, animationScale) {
      element.style.animation = `stayHidden ${delayHidden}s, ${animationScale} ${slow * 16}s ${delayFinalScale}s linear `;
    }
    setInterval(() => {
      var zoomDivs = document.querySelectorAll('div.zoom');
      for (var i = 0; i < zoomDivs.length; i++) {
        var zoomDiv = zoomDivs[i];
        zoomDiv.parentNode.removeChild(zoomDiv);
      }
      showContainerAndAnimate();
    }, (numImages * 4 * slow) * 1000);
  }, "100");
});