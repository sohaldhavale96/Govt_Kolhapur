var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});

var swiper1 = new Swiper(".swiper1", {
    effect: "cards",
    grabCursor: true,
});
var swiper3 = new Swiper(".swiper3", {
    effect: "cards",
    grabCursor: true,
});
var swiper4 = new Swiper(".swiper4", {
    effect: "cards",
    grabCursor: true,
});
var swiper5 = new Swiper(".swiper5", {
    effect: "cards",
    grabCursor: true,
});

gsap.registerPlugin(ScrollTrigger)
const camera = document.getElementById('camera')
const page2 = document.getElementById('page2')
const page3 = document.getElementById('page3')
const page4 = document.getElementById('page4')
const page5 = document.getElementById('page5')
const tl = gsap.timeline({
    scrollTrigger:{
        trigger:page2,
        start:"-30% 50%",
        end:"50% 50%",
        scroller:"body",
        scrub:1
    }
})
tl.to(camera,{
    y:"200%",
    x:"400%",
    rotate:"10deg",
})

const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:page3,
        start:"-30% 50%",
        end:"50% 50%",
        scroller:"body",
        scrub:1
    }
})
tl2.to(camera,{
    x:"400%",
    y:"500%",
    rotate:"-10deg"
})
const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:page4,
        start:"-40% 50%",
        end:"50% 50%",
        scroller:"body",
        scrub:1,
    }
})
tl3.to(camera,{
    x:"400%",
    y:"900%",
    rotate:"10deg"
})
const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:page5,
        start:"-40% 50%",
        end:"50% 50%",
        scroller:"body",
        scrub:1,
    }
})
tl4.to(camera,{
    x:"400%",
    y:"1250%",
    rotate:"-10deg"
})

const cursor =  document.getElementById("cursor")
const section = document.querySelectorAll(".content-section .event-details")
section.forEach((item)=>{
    item.addEventListener("mouseenter",(e)=>{
        gsap.to(cursor,{
            x:e.clientX - 50,
            y:e.clientY - 50,
            scale:1,
            opacity:1
        })
    })
    item.addEventListener("mousemove",(e)=>{
        gsap.to(cursor,{
            x:e.clientX - 50,
            y:e.clientY - 50,
            scale:1,
            opacity:1
        })
    })
    item.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
})