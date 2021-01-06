(function(){

let target = document.querySelectorAll('._zoom__datasource__');

const zoomImage = (e)=>{

    // Generating static content
    const $largeImgURL = e.target.dataset.large;
    const $target  = e.target;
    const $parent = $target.parentElement
    const $zoomed = document.createElement('div');

    const zommedStyles = {
        "position":"absolute",
        "width":"600px",
        "height":"250px",
        "top":"0px",
        "z-index":"99999"
    }

    $zoomed.style.background = `url(${$largeImgURL})`;
    $zoomed.style.left = Number(e.target.width+20)  + 'px';
    $zoomed.id = '_zoomedImage__';
    Object.assign($zoomed.style,zommedStyles)

    $parent.style.position = 'relative';
    $parent.appendChild($zoomed);
    
    // Generating Positions

    const imgX = $target.x;
    const imgY = $target.y;
    const imgWidth = $target.width;
    const imgHeight = $target.height;

    const moveImage = (e) => {
        var mouseX = e.clientX
        var mouseY = e.clientY
        // distance of mouseX- distance of imageX
        var x = ((mouseX-imgX) * 100)/  imgWidth
        var y = ((mouseY-imgY) * 100)/  imgHeight
        $zoomed.style.backgroundPosition = `${x}% ${y}%`
    }
    document.addEventListener("mousemove", moveImage, false)
  }

Array.from(target).forEach( el => {
  el.addEventListener('mouseenter', zoomImage)
  el.addEventListener('mouseout',()=>{
    document.querySelector('#_zoomedImage__').remove()
  })
})
})();
