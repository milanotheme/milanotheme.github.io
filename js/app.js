document.addEventListener("DOMContentLoaded", function(){
    // Var use in here;
    var removePopup = document.getElementsByClassName("remove-popup"),
        popup = document.getElementById("popup"),
        topHeader = document.getElementsByClassName("top-header"),
        dotSlide = document.getElementsByClassName("dot__item"),
        slideItem = document.querySelectorAll("#slider .slide-item"),
        productItem = document.querySelectorAll("#wrap-product .slides .slide-item"),
        controlSlide = document.querySelectorAll(".controls .fa"),
        slideProduct = document.querySelectorAll("#wrap-product .slides"),
        slideBlog = document.querySelectorAll("#blog .slides"),
        btn = document.getElementById("btn"),
        slideBrand = document.querySelectorAll("#group-brand .slides"),
        blogItem = document.querySelectorAll("#blog .slides .slide-item"),
        brandItem = document.querySelectorAll("#group-brand .slides .slide-item"),
        tabLink = document.getElementsByClassName("tab__link"),
        subNav = document.querySelectorAll("#nav .iconOut"),
        subNavInner = document.querySelectorAll("#nav .iconInner"),
        sideBar = document.getElementById("collapsibleNavId"),
        body = document.getElementsByTagName("body"),
        bgBlack = document.getElementById("bgBlack"),
        wrapPopup = document.getElementsByClassName("wrap-popup"),
        navLink = document.querySelectorAll("#nav .nav-link"),
        navDropdown = document.getElementsByClassName("subNav"),
        navDropdownInner = document.getElementsByClassName("navDropdownInner"),
        NextSlide = controlSlide[1],
        PrevSlide = controlSlide[0],
        autoSlide = setInterval(function(){ auto() },3000),
        dotSlideCLient = document.getElementsByClassName("dot__item-client"),
        clientReview = document.querySelectorAll("#client .slide-item"),
        status = "start",
        toggleBar = document.getElementById("toggleBar");
        removePopup[0].addEventListener("click", function(){
            popup.classList.add("hidden");
            body[0].style.position = "";
            bgBlack.style.display = "none";
            wrapPopup[0].style.display = "none";
        })
        // Handling For Remove Popup
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].addEventListener("click", function(){
                for (let i = 0; i < navLink.length; i++) {
                    navLink[i].classList.remove("active");
                    this.classList.add("active");
                }
            })
        }
    // Handling For Active Link;
    toggleBar.addEventListener("click", function(){
        sideBar.classList.add("visible");
        bgBlack.style.visibility = "visible";
        bgBlack.style.display = "block";
    })
    bgBlack.addEventListener("click", function(){
        this.style.display = "none";
        popup.classList.add("hidden");
        wrapPopup[0].style.display = "none";
        sideBar.classList.remove("visible");
        body[0].style.position = "";
    })
    // Handling For Toggle Slide Bar;
    for (let i = 0; i < subNav.length; i++) {
        subNav[i].addEventListener("click", function(){
            if (subNav[i].classList[1] == "fa-minus-square-o") {
                subNav[i].setAttribute("class", "iconOut fa fa-plus-square-o d-none");
                navDropdown[i].classList.remove("subMenu");
                this.style.backgroundColor = "#414141";
            } else {
                for (let i = 0; i < subNav.length; i++) {
                    subNav[i].setAttribute("class", "iconOut fa fa-plus-square-o d-none");
                    subNav[i].style.backgroundColor = "#414141";
                }
                this.style.backgroundColor = "#2a2a2a";
                subNav[i].setAttribute("class", "fa fa-minus-square-o");
                for (let i = 0; i < navDropdown.length; i++) {
                    navDropdown[i].classList.remove("subMenu");
                }
                navDropdown[i].classList.add("subMenu");
            }
            console.log(subNav[i]);
        })
    } 
    for (let i = 0; i < subNavInner.length; i++) {
        subNavInner[i].addEventListener("click", function(){
            if (subNavInner[i].classList[2] == "fa-minus-square-o") {
                subNavInner[i].setAttribute("class", "iconInner fa fa-plus-square-o");
                navDropdownInner[i].classList.remove("subMenu");
                this.style.backgroundColor = "#414141";
            } else {
                for (let i = 0; i < subNavInner.length; i++) {
                    subNavInner[i].setAttribute("class", "iconInner fa fa-plus-square-o");
                    subNavInner[i].style.backgroundColor = "#414141";
                }
                this.style.backgroundColor = "#2a2a2a";
                subNavInner[i].setAttribute("class", "iconInner fa fa-minus-square-o");
                for (let i = 0; i < navDropdownInner.length; i++) {
                    navDropdownInner[i].classList.remove("subMenu");
                }
                navDropdownInner[i].classList.add("subMenu");
            }
        })
    }
    // Handling For Nav Dropdown;
    window.addEventListener("scroll", function(){
       if (window.pageYOffset > 290 && status == "start") {
           topHeader[0].classList.remove("hidden");
           btn.classList.add("active");
           status = "end";
       } else if (window.pageYOffset <= 290 && status == "end") {
           topHeader[0].classList.add("hidden");
           btn.classList.remove("active");
           status = "start";
       }
    })
    for (let i = 0; i < dotSlide.length; i++) {
        dotSlide[i].addEventListener("click", function(){
            // Handling For Dot;
            clearInterval(autoSlide);
            // When clear click dot;;
            for (let i = 0; i < dotSlide.length; i++) {
                dotSlide[i].classList.remove("active");
                this.classList.add("active");
            }
            // Handling For Slides;
            for (let x = 0; x < slideItem.length; x++) {
                slideItem[x].classList.remove("active");
            }
            slideItem[i].classList.add("active");
        })
    }
    function auto(){
        var elmCurrent = document.querySelector(".slide-item.active");
        // Get the current molecule;
        for (let i = 0; i < slideItem.length; i++) {
            dotSlide[i].classList.remove("active");
            slideItem[i].classList.remove("active");
        }
        // Remove class active;
        for (var x = 0; elmCurrent = elmCurrent.previousElementSibling ; x++) {};
        if( x == slideItem.length - 1) {
            slideItem[0].classList.add("active");
            dotSlide[0].classList.add("active");
        } else {
            slideItem[x].nextElementSibling.classList.add("active");
            dotSlide[x].nextElementSibling.classList.add("active");
        }
        // Add class active for dot slide;
    }
    for (let i = 0; i < tabLink.length; i++) {
        tabLink[i].addEventListener("click", function(){
            for (let i = 0; i < tabLink.length; i++) {
                tabLink[i].classList.remove("active");
                this.classList.add("active");
            }
        });
    }
    // Add class active for tab Link;
    var x = 0,
        slideNext = (productItem.length - 1) - 4;
    NextSlide.addEventListener("click", function(){
        if (x > slideNext ) {
            return;
        } else {
            slideProduct[0].classList.add("AniProduct" + x++);
        }
    });
    PrevSlide.addEventListener("click", function(){
        if (x > slideNext ) {
            x = slideNext;
            slideProduct[0].classList.remove("AniProduct" + x);
        } else if (x == 0) {
            return;
        } else if (x > 0) {
            x--;
            slideProduct[0].classList.remove("AniProduct" + (x));
        } 
    });
    // Handling For Slides;
    for (let i = 0; i < dotSlideCLient.length; i++) {
        dotSlideCLient[i].addEventListener("click", function(){
            for (let i = 0; i < dotSlideCLient.length; i++) {
                dotSlideCLient[i].classList.remove("active");
                this.classList.add("active");
            }
            for (let i = 0; i < clientReview.length; i++) {
                clientReview[i].classList.remove("active");
            }
            clientReview[i].classList.add("active");

        })
    } 
    // Handling For Slide Client Review;
    var NextSlide = controlSlide[3],
        PrevSlide = controlSlide[2],
        i = 0;
        nextItemBlog = ((blogItem.length - 1) - 2);
    NextSlide.addEventListener("click", function(){
        if (i > nextItemBlog) {
            return;
        }
        slideBlog[0].classList.add("AniBlog" + i++);
    })
    PrevSlide.addEventListener("click", function(){
        if (i == 0) {
            return;
        } else if (i > nextItemBlog) {
            i = nextItemBlog;
            slideBlog[0].classList.remove("AniBlog" + i);
        } else if ( i > 0 ) {
            i--;
            slideBlog[0].classList.remove("AniBlog" + i);
        }
    })
    // Handling For Slide Blog;
    var NextSlide = controlSlide[5],
        PrevSlide = controlSlide[4];
        z = 0;
        nextBrand = (brandItem.length - 1) - 6;
    NextSlide.addEventListener("click", function(){
        if (z > nextBrand) {
            return;
        }
        slideBrand[0].classList.add("AniBrand" + z++);
    })
    PrevSlide.addEventListener("click", function(){
        if (z == 0) {
            return;
        }
        z--;
        slideBrand[0].classList.remove("AniBrand" + z);
    })
    // Handling For Slide Group Brand;
    btn.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    })
    // Handlind For Scroll To Top;
},false)
