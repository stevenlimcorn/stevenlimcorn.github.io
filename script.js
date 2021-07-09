var setActive = function(object) {
    document.getElementById("tab-active").removeAttribute("id")
    object.setAttribute("id", "tab-active")
    document.getElementById("panel-active").removeAttribute("id")
    var index = $('li#tab-active').index()
    document.getElementsByClassName("panel-style")[index].setAttribute("id", "panel-active")
};
