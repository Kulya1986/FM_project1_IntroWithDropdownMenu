var menuMobileOpen = document.querySelector("#mobile-menu > img");
var menuMobileClose= document.querySelector("#mobile-menu-close > img");
var featuresMenuItem = document.querySelector("#menuFeatures");
var featuresSubMenu = document.querySelector("#menuFeatures > .submenu");
var companyMenuItem = document.querySelector("#menuCompany");
var companySubMenu = document.querySelector("#menuCompany > .submenu");


function openSideNavMobile(){ 
    var menu = document.querySelector('.nav-subarea');
    menu.classList.remove("closed")
    menu.classList.add("opened");
}

function closeSideNavMobile(){
    var menu = document.querySelector('.nav-subarea');
    menu.classList.add("closed")
    menu.classList.remove("opened");
}

function closeSubMenu(){
    if (!featuresSubMenu.classList.contains("closed")) {
        featuresSubMenu.classList.add("closed");
        featuresSubMenu.classList.remove("opened");
        document.querySelector("#menuFeatures > svg > path").setAttribute("d","m1 1 4 4 4-4");
    }
    
    if (!companySubMenu.classList.contains("closed")) {
        companySubMenu.classList.add("closed");
        companySubMenu.classList.remove("opened");
        document.querySelector("#menuCompany > svg > path").setAttribute("d","m1 1 4 4 4-4");
    }    
}

document.onclick = function (e) {
    if (e.target.id !== 'menuFeatures' && e.target.id !== 'menuCompany') {
        if (e.target.offsetParent && e.target.offsetParent.id !== 'menuFeatures')
        closeSubMenu();
    }
}

function openSubMenu(e){
    var menuItem = e.target.id;
    var selector = "#"+menuItem+" > .submenu";
    if(menuItem==='menuFeatures' || menuItem==='menuCompany'){ 
        document.querySelector(selector).classList.toggle("closed");
        document.querySelector(selector).classList.toggle("opened");
    }
    var img_selector = "#"+menuItem+" > svg > path";
    var arrow = document.querySelector(img_selector);
    var menu_class = document.querySelector(selector).classList;
    if (menu_class.contains("opened")){
        arrow.setAttribute("d","m1 5 4-4 4 4");
    }else{
        arrow.setAttribute("d","m1 1 4 4 4-4");
    } 
}

menuMobileOpen.addEventListener("click", openSideNavMobile);
menuMobileClose.addEventListener("click", closeSideNavMobile);
featuresMenuItem.addEventListener("onmousedown", openSubMenu);
companyMenuItem.addEventListener("onmousedown", openSubMenu);
