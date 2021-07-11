let togglenavstatus = false;

document.getElementById("hbmenu").addEventListener("click", togglenav);
document.getElementById("Wit").addEventListener("click", Wit);
document.getElementById("Groen").addEventListener("click", Groen);
document.getElementById("Blauw").addEventListener("click", Blauw);
document.getElementById("Geel").addEventListener("click", Geel);
document.getElementById("Rood").addEventListener("click", Rood);
document.getElementById("Paars").addEventListener("click", Paars);

function Wit(){ 
    let getsidebar = document.querySelector(".nav-sidebar");
    let bodybackground = document.querySelector("body");
    bodybackground.style.backgroundColor = "White";
    getsidebar.style.backgroundColor = "White";
    togglenav()
}

function Groen(){ 
    let getsidebar = document.querySelector(".nav-sidebar");
    let bodybackground = document.querySelector("body");
    bodybackground.style.backgroundColor = "Green";
    getsidebar.style.backgroundColor = "Green";
    togglenav()
}

function Blauw(){ 
    let getsidebar = document.querySelector(".nav-sidebar");
    let bodybackground = document.querySelector("body");
    bodybackground.style.backgroundColor = "Blue";
    getsidebar.style.backgroundColor = "Blue";
    togglenav()
}

function Geel(){ 
    let getsidebar = document.querySelector(".nav-sidebar");
    let bodybackground = document.querySelector("body");
    bodybackground.style.backgroundColor = "Yellow";
    getsidebar.style.backgroundColor = "Yellow";
    togglenav()
}

function Rood(){ 
    let getsidebar = document.querySelector(".nav-sidebar");
    let bodybackground = document.querySelector("body");
    bodybackground.style.backgroundColor = "Red";
    getsidebar.style.backgroundColor = "Red";
    togglenav()
}

function Paars(){ 
    let getsidebar = document.querySelector(".nav-sidebar");
    let bodybackground = document.querySelector("body");
    bodybackground.style.backgroundColor = "Purple";
    getsidebar.style.backgroundColor = "Purple";
    togglenav()
}

function togglenav() {
    let getsidebar = document.querySelector(".nav-sidebar");
    let getsidebarUL = document.querySelector(".nav-sidebar ul");
    let getsidebarLI = document.querySelector(".nav-sidebar ul li");
        if (togglenavstatus === false){
                getsidebarUL.style.visibility = "visible";
                getsidebarUL.style.overflow = "visible";
                getsidebar.style.width = "272px";
                getsidebar.style.padding = "0";
                togglenavstatus = true;
        }
        else if (togglenavstatus === true){
                getsidebarUL.style.visibility = "hidden";
                getsidebarUL.style.overflow = "hidden";
                getsidebar.style.width = "50px";
                getsidebar.style.padding = "0 5px";
                togglenavstatus = false;
        }   
}