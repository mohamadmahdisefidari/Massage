// =========================
// Loader
// =========================


window.addEventListener("load", function(){


    const loader = document.getElementById("loader");


    setTimeout(function(){


        if(loader){

            loader.classList.add("hide");

        }


    },700);



});




// اگر اینترنت کند بود، لودر بیشتر از ۴ ثانیه نمی‌ماند


setTimeout(function(){


    const loader = document.getElementById("loader");


    if(loader && !loader.classList.contains("hide")){


        loader.classList.add("hide");


    }


},4000);







// =========================
// Mobile Menu
// =========================



const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



if(menuBtn){


menuBtn.addEventListener("click",function(){


    navLinks.classList.toggle("active");


    const icon = menuBtn.querySelector("i");


    icon.classList.toggle("fa-bars");

    icon.classList.toggle("fa-xmark");


});



}





// بستن منو بعد از کلیک روی لینک


document.querySelectorAll(".nav-links a").forEach(function(link){


    link.addEventListener("click",function(){


        navLinks.classList.remove("active");


        const icon = menuBtn.querySelector("i");


        icon.classList.add("fa-bars");

        icon.classList.remove("fa-xmark");



    });


});








// =========================
// FAQ Accordion
// =========================



const faqButtons = document.querySelectorAll(".faq-item button");



faqButtons.forEach(function(button){



button.addEventListener("click",function(){



    const answer = this.nextElementSibling;


    const symbol = this.querySelector("span");



    document.querySelectorAll(".faq-answer").forEach(function(item){


        if(item !== answer){

            item.style.maxHeight = null;

        }


    });





    if(answer.style.maxHeight){


        answer.style.maxHeight = null;

        symbol.innerHTML = "+";



    }else{


        answer.style.maxHeight = answer.scrollHeight + "px";

        symbol.innerHTML = "−";


    }





});



});









// =========================
// Scroll Animation
// =========================



const animatedItems = document.querySelectorAll(

".service-card, .review-card, .contact-card, .about-text"

);





animatedItems.forEach(function(item){


    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="0.7s ease";


});






function showItems(){


animatedItems.forEach(function(item){



    const position = item.getBoundingClientRect().top;



    if(position < window.innerHeight - 80){


        item.style.opacity="1";

        item.style.transform="translateY(0)";


    }



});



}





window.addEventListener("scroll",showItems);


showItems();







// =========================
// Smooth Close Menu Outside
// =========================



document.addEventListener("click",function(e){



if(

navLinks &&

!navLinks.contains(e.target) &&

!menuBtn.contains(e.target)

){


navLinks.classList.remove("active");


}



});