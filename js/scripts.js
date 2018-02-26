var createSlider = {
    slider : document.getElementById(id),
    positionInfo: slider.getBoundingClientRect(),
    sliderHeight : positionInfo.height,
    sliderWidth : positionInfo.width,
    sliderContainerWidth : parseInt(document.getElementById(id).offsetWidth),
    ul : document.getElementById("carrousel"),
    ulLength : ul.children.length,
    i : 0,
    index : 1,
    setUlWidth : function(){
        this.ul.style.width = (this.sliderContainerWidth * this.ulLength) + 'px';
        //ul.style.width = '3500px';

    }
    this.setLiWidth = function(){
        for( i; i < this.ulLength; i++ ){
            this.ul.children[i].style.width = this.sliderContainerWidth  + 'px';
        }
    }

    this.setUlWidth();
    this.setLiWidth();
}
new createSlider('slider');