gsap.to(".imagecontainer img",{
    width:"100%",
    stagger:2,
    duration:2
})
gsap.to("#page1-text h1",{
    top:"0%",
    stagger:2,
    ease:Expo.easeInOut
})
gsap.to("#page1-text h1",{
    delay:2,
    top:"-100%",
    stagger:2,
    ease:Expo.easeInOut
})