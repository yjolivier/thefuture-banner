const burgerMenu = document.getElementById("menu_burger_id"),
secondMenuNav = document.getElementById("_menu_nav"),
menubtnCross = document.getElementById("menu_btn__cross"),
menuCrossContainer = document.getElementById("menu_cross_id"),
signInBtn = secondMenuNav.querySelector(".card-top .card-top-menu ul li"),
sectionBtn = document.querySelector(".hero-body .hero-card-top .border")
console.log(sectionBtn);

//on click cross menu

const showSecondMenu = (element) => {
    burgerMenu.classList.add("active"); 
    menubtnCross.classList.remove("active");
    setTimeout(() => {
        secondMenuNav.style.top = "0px";
        setTimeout(() =>{
            menuCrossContainer.style.marginRight = "0px";
            menuCrossContainer.style.opacity = "1";
            setTimeout(() =>{
                signInBtn.style.marginLeft = "0px"
                signInBtn.style.opacity = "1";
                sectionBtn.style.width = "100%";
            },200)
        },
        500)
    },
    400);
}

const desableSecondMenu = () =>{
    menubtnCross.classList.add("active");
    burgerMenu.classList.remove("active");  
    secondMenuNav.removeAttribute("style");
    signInBtn.removeAttribute("style");
    sectionBtn.removeAttribute("style")
}