gsap.registerPlugin(ScrollTrigger)

function LandingTextAnimation(){
    const landingpageanimationtext = document.querySelectorAll(".animation1")

    gsap.from(landingpageanimationtext,{
        y:"100px",
        opacity:0,
        stagger:{
            amount:0.1
        }
    })
}

// LandingTextAnimation()
function hoveringanimation(){
    const hoveringPage3 = document.querySelectorAll(".page3-hover-right");

    hoveringPage3.forEach((item) => {
        const animatedImg = item.querySelector(".animated_img");
        item.addEventListener("mouseenter", () => {
            gsap.to(animatedImg, {
                opacity: 1,
                scale: 1,
            });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(animatedImg, {
                opacity: 0,
                scale: 0,
            });
        });
        item.addEventListener("mousemove", (e) => {
            gsap.to(animatedImg, {
                x:e.x - item.getBoundingClientRect().x - 100,
                y:e.y - item.getBoundingClientRect().y - 100,
            });
        });
    });

}

function videoPLay(){
    const elem = document.querySelector("#page4-right-video")
    // console.log(elem.childNodes[3])
    elem.addEventListener("mouseenter",()=>{
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",()=>{
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
}

// Pin animation
function Pinanimation(){
        
    const mainpage = document.querySelector("#page5")
    const mainpagetop = document.querySelector("#page5-top")
    const mainpagebottom = document.querySelector("#page5-bottom")
    const centercontent1 = document.querySelector("#page5-center .page5-center-content1")
    const centercontent2 = document.querySelector("#page5-center .page5-center-content2")
    console.log(centercontent2)
    const tl = gsap.timeline({scrollTrigger:{
        trigger:mainpage,
        pin:true,
        start:"50% 50%",
        end:"100% 0%",
        scrub:true
    }})
    tl.to(mainpagetop,{
        top:"-50%",
        fontSize:"4em"
    },'a')
    .to(mainpagebottom,{
        bottom:"-50%",
        fontSize:"4em"
    },'a')
    .from(centercontent1,{
        x:"-800px",
    },'b')
    .from(centercontent2,{
        x:"1300px",
    },'b')

}

function cursorAnimation1(){
    const customCursor = document.querySelector("#cursor");
const page5 = document.querySelector('#page5');

page5.addEventListener("mouseenter", (e) => {
    gsap.to(customCursor, {
        x: e.clientX - 50,
        y: e.clientY - 50,
        opacity: 1,
        scale:1,
        duration: 0.2
    });
});

page5.addEventListener("mousemove", (e) => {
    gsap.to(customCursor, {
        x: e.clientX - 50,
        y: e.clientY - 50,
        duration: 0.1
    });
});

page5.addEventListener("mouseleave", () => {
    gsap.to(customCursor, {
        opacity: 0,
        scale:0,
        duration: 0.2
    });
});
}

function page88Animation(){
    const page8 = document.querySelector("#page8")
const images = document.querySelectorAll(".imagetrail")

page8.addEventListener("mousemove",(e)=>{
    gsap.to(images,{
        x:e.clientX,
        y:e.clientY,
        scale:1,
        opacity:1,
        stagger:0.06
    })
})
page8.addEventListener("mouseenter",(e)=>{
    gsap.to(images,{
        x:e.clientX,
        y:e.clientY,
        scale:1,
        opacity:1,
        stagger:0.06
    })
})
page8.addEventListener("mouseleave",(e)=>{
    gsap.to(images,{
        scale:0,
        opacity:0,
        stagger:0.06
    })
})
}

function successAnimation(){
const page6 = document.getElementById('page6')
const img1 = document.querySelector("#page6-photo")
const img2 = document.querySelector("#page6-photo-2")
const img3 = document.querySelector("#page6-photo-3")
const success = document.querySelectorAll(".success-story")
const tl = gsap.timeline()
tl.from(img1,{
    x:"-500px",
    scrollTrigger:{
        trigger:page6,
        // markers:true,
        start:"10% 30%",
        end:"55% 50%",
        scrub:true
    }
})
tl.from(img2,{
    x:"500px",
    scrollTrigger:{
        trigger:page6,
        // markers:true,
        start:"10% 30%",
        end:"55% 50%",
        scrub:true
    }
})
tl.from(img3,{
    x:"500px",
    scrollTrigger:{
        trigger:page6,
        // markers:true,
        start:"10% 30%",
        end:"55% 50%",
        scrub:true
    }
})}

function clickLink(){
const links = [
    { link: "/pages/about.html" },
    { link: "/pages/gallery.html" },
    { link: "/pages/teams.html" },
    { link: "/pages/blogs.html" },
    { link: "/pages/rules.html" },
    { link: "/pages/contact.html" },
];

const clickLinks = document.querySelectorAll('.page3-hover-right');

clickLinks.forEach((element, index) => {
    if (links[index]) {
        element.addEventListener('click', () => {
            window.location.href = links[index].link;
        });
    }
});
}

LandingTextAnimation()
hoveringanimation()
videoPLay()
Pinanimation()
cursorAnimation1()
page88Animation()
successAnimation()
clickLink()