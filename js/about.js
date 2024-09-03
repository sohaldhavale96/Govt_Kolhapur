gsap.registerPlugin(ScrollTrigger);

function firstAnimation(){const tl = gsap.timeline({
    repeat:-1
})

tl.to(".imagecontainer img",{
    width:"100%",
    stagger:2,
    duration:2
},'a')
.to("#page1-text h1",{
    top:"0%",
    stagger:2,
    ease:Expo.easeInOut
},'a')
.to("#page1-text h1",{
    delay:2,
    top:"-100%",
    stagger:2,
    ease:Expo.easeInOut
},'a')}

function counterAnimation(){
    const counters = document.querySelectorAll('.count');

    counters.forEach((item) => {
        const targetCount = parseInt(item.dataset.count);
        let initialCount = 0;

        function updateNumber() {
            initialCount += 20;
            item.innerText = initialCount;

            if (initialCount < targetCount) {
                setTimeout(updateNumber, 30);
            } else {
                item.innerText = targetCount;
            }
        }

        updateNumber();
    });
}

gsap.to({}, {
    scrollTrigger: {
        trigger: '#counter',
        start: 'top 80%',
        end:"50% 50%",
        onEnter: counterAnimation,
        scrub:true
    }
});

const page2 = document.getElementById('page2')
const allSections = gsap.utils.toArray('#page2-scroller section')

let scrolltween = gsap.to(allSections,{
    xPercent:-100*(allSections.length - 1),
    ease:"none",
    scrollTrigger:{
        trigger:page2,
        pin:true,
        scrub:1,
        end:"+=3000" 
    }
})

firstAnimation()