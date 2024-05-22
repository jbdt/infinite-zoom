document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const prefix = "ai";
    const startAt = 0;
    const extension = "png";
    const numImages = 9;
    const slow = 1;
    const container = document.createElement('div');
    container.style.display = 'none'; // Ocultamos el contenedor mientras se cargan las imágenes
    // Agregar las imágenes al contenedor
    for (let i = 0; i < numImages; i++) {
      const img = new Image();
      img.src = `img/${prefix}${i+startAt}.${extension}`;
      container.appendChild(img);
    }
    // Una vez que todas las imágenes estén cargadas, mostramos el contenedor y comenzamos las animaciones
    function showContainerAndAnimate() {
      document.body.appendChild(container); // Agregar el contenedor al DOM
      for (let i = 0; i < numImages; i++) {
        const element = document.createElement('div');
        element.classList.add('zoom');
        element.style.backgroundImage = `url('img/${prefix}${i+startAt}.${extension}')`;
        document.body.appendChild(element); // Agregar el elemento al DOM
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