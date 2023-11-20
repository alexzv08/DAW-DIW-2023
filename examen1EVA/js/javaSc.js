window.onload = function(){
    input = document.querySelectorAll("input");
    input.forEach(element => {
        element.addEventListener("mousedown",  function () {
            this.style.boxShadow = "none"
        });
        element.addEventListener("mouseup",  function () {
            this.style.boxShadow = "5px 5px 3px black"
        });
    });
  
}