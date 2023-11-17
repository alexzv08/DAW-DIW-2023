window.onload = function(){
    colores = document.getElementsByClassName("selectColor");

    colores[0].addEventListener("click",function(){
        this.classList.toggle("active");

    })
    colores[1].addEventListener("click",function(){
        this.classList.toggle("active");

    })
    colores[2].addEventListener("click",function(){
        this.classList.toggle("active");

    })
  
}