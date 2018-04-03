var ul = document.getElementById("carrousel"),
    ulLength = ul.children.length,
    index =1;

function createSlider(id){
        slider= document.getElementById(id),
        positionInfo = slider.getBoundingClientRect(),
        sliderHeight = positionInfo.height,
        sliderWidth = positionInfo.width,
        sliderContainerWidth = document.getElementById(id).offsetWidth,
        ul = document.getElementById("carrousel"),
        ulLength = ul.children.length,
        n=0,
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
        span.setAttribute("onclick","currentSlide('carrousel','" + n + "')");
        div.appendChild(span);
    };

    next.setAttribute("class","next");
    next.setAttribute("id","next_"+id);
    next.setAttribute("onclick","transitionSlides('carrousel',1)");
    next.innerHTML = "&#10095;";
    slider.appendChild(next);

    prev.setAttribute("class","prev");
    prev.setAttribute("id","prev_"+id);
    prev.setAttribute("onclick","transitionSlides('carrousel',-1)");
    prev.innerHTML = "&#10094;";
    slider.appendChild(prev);

    div.setAttribute("class","dots-holder");
    slider.appendChild(div);
    for( n; n<dotsNumber; n++){
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
var index = 0,
    n=1;
transitionSlides = function(id,n){
    var slideWidth = document.getElementById(id).children[0].style.width,
        left = document.getElementById(id).style.left,
        ul = document.getElementById("carrousel"),
        ulLength = ul.children.length-1,
        ulWidth = ul.children[0].offsetWidth;
    index = index + (n);
    if( index > ulLength ){ index=0; }
    if ( index < 0){ index = ulLength; }
    document.getElementById(id).style.left = "-" + (ulWidth*index) + "px" ;
    console.log(index);
}
currentSlide = function(id,n){
    ulWidth = document.getElementById('carrousel').children[0].offsetWidth;
    console.log(n);
    console.log(ulWidth);
    document.getElementById(id).style.left = '-' + ulWidth * n + 'px';
}

createSlider("slider");



