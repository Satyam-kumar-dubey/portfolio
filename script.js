function init (){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init()

function Cursor (){
    document.addEventListener("mousemove",function (dets){
        gsap.to(".cursor",{
            opacity:1,
            left: dets.x-28,
            top: dets.y+38,
        })
    })
    
    document.addEventListener("mouseleave",function (dets){
        gsap.to(".cursor",{
            opacity:0,
        })
    })
}
Cursor()

function HeadAnimation (){
    gsap.from(".welcome h1",{
        y:100,
        opacity:0,
        duration:.6,
        delay:.5,
        stagger:.4,
    })
}
HeadAnimation()



gsap.from("#name",0.6,{scale:"+=.1", yoyo:true, repeat:-1})
gsap.from("#surname",0.6,{scale:"+=.1", yoyo:true, repeat:-1})

gsap.from(".main-img",0.6,{y:"+=20", yoyo:true, repeat:-1})

gsap.from(".Academics",0.6,{x:"+=-30", yoyo:true, repeat:-1})

gsap.from(".Project",0.6,{x:"+=30", yoyo:true, repeat:-1})

gsap.from(".dev-icons",0.6,{x:"+=25", yoyo:true, repeat:-1})

// new Kursor({
//     type:3,
//     removeDefaultCursor:false,
// })

gsap.from("#project1",0.6,{y:"+=10", yoyo:true, repeat:-1})
gsap.from("#project2",0.6,{y:"+=10", yoyo:true, repeat:-1})
gsap.from("#project3",0.6,{y:"+=10", yoyo:true, repeat:-1})
gsap.from("#project4",0.6,{y:"+=10", yoyo:true, repeat:-1})
gsap.from("#project5",0.6,{y:"+=-10", yoyo:true, repeat:-1})
gsap.from("#project6",0.6,{y:"+=-10", yoyo:true, repeat:-1})
gsap.from("#project7",0.6,{y:"+=-10", yoyo:true, repeat:-1})
gsap.from("#project8",0.6,{y:"+=-10", yoyo:true, repeat:-1})
gsap.from("#project9",0.6,{y:"+=-10", yoyo:true, repeat:-1})



gsap.from(".arrow i",0.6,{y:"+=-20", yoyo:true, repeat:-1})

gsap.from(".contact-images img",.7,{scale:"+=.2", yoyo:true, repeat:-1})



document.querySelector("#insta").addEventListener("click",function (){
    alert("Click On The Text Below")
})
document.querySelector("#linkedin").addEventListener("click",function (){
    alert("Click On The Text Below")
})
document.querySelector("#github").addEventListener("click",function (){
    alert("Click On The Text Below")
})
document.querySelector("#gmail").addEventListener("click",function (){
    alert("Gmail Not Found")
})

// gsap.to(".nav",{
//     transform:"translateY(-40%)",
//     // opacity:0,
//     ScrollTrigger:{
//         trigger:".nav",
//         scroller:".page1",
//         markers:true,
//         start:"top 40vh",
//         end:"top 30%vh",
//         scrub:true,
//         delay:3,
//         duration:8
//     }
// })


// const nav = document.querySelector(".nav");
// let lastScroll = window.scrollY;

// window.addEventListener("scroll", ()=>{
//     if(lastScroll<window.scrollY) {
//         nav.classList.add("nav--hidden");
//         console.log("hii")
//     }else {
//         nav.classList.remove("nav--hidden");
//     }

//     lastScroll = window.scrollY;
// })

// window.addEventListener("scroll")

// let lastScrollTop = 0;
// const navbar = document.getElementsByClassName(".nav");

// window.addEventListener("scrollY",function (){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if(scrollTop > lastScrollTop){
//         navbar.style.top="-10vh";
//     }else{
//         navbar.style.top="0";
//     }scrollTop
//     lastScrollTop = scrollTop;
// })

gsap.from(".nav",0.6,{scale:"+=.1", yoyo:true, repeat:-1})