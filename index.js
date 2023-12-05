document.documentElement.style.setProperty("--mainColor", localStorage.getItem("userThemeColor"));

var colorInput = document.querySelector("#choose-theme-color");

colorInput.addEventListener("change", function() {

    document.documentElement.style.setProperty("--mainColor", this.value);

    localStorage.setItem("userThemeColor", this.value);
    
});