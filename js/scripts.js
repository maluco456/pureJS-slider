function createSlider(id){
        slider= document.getElementById(id),
        positionInfo = slider.getBoundingClientRect(),
        sliderHeight = positionInfo.height,
        sliderWidth = positionInfo.width,
        sliderContainerWidth = parseInt(document.getElementById(id).offsetWidth),
        ul = document.getElementById("carrousel"),
        ulLength = ul.children.length,
        n=1,
        dots = [],
        dotsNumber = ulLength,
        i = 0,
        index = 1,
        div = document.createElement('div'),
        next = document.createElement("a"),
        prev = document.createElement("a");

    renderDots =  function(n){
        var span = document.createElement('span');
        span.setAttribute("class","dot");
        span.setAttribute("onclick","currentSlide('" + n + "')");
        div.appendChild(span);
    };

    next.setAttribute("class","next");
    next.setAttribute("id","next_"+id);
    //next.setAttribute("onclick","plusSlides(1)");
    next.innerHTML = "&#10095;";
    slider.appendChild(next);
    //next.addEventListener("click", teste() );

    prev.setAttribute("class","prev");
    prev.setAttribute("id","prev_"+id);
    //prev.setAttribute("onclick","plusSlides(-1)");
    prev.innerHTML = "&#10094;";
    slider.appendChild(prev);

    div.setAttribute("class","dots-holder");
    slider.appendChild(div);
    for( n; n<=dotsNumber; n++){
        renderDots(n);
        dots[n] += 1;
    }
    setUlWidth = function(){
    ul.style.width = (this.sliderContainerWidth * this.ulLength) + 'px';
        //ul.style.width = '3500px';

    };
    setLiWidth = function(){
        for( i; i < this.ulLength; i++ ){
            this.ul.children[i].style.width = this.sliderContainerWidth  + 'px';
        }
    };
    setUlWidth();
    setLiWidth();
}
createSlider("slider");

var ul = document.getElementById("carrousel"),
    ulLength = ul.children.length;
