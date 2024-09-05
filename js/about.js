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

function horizontalAnimation(){

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

}

function accordins() {
    const items = document.querySelectorAll(".item");
    const imageurl = [
        "#4286F5",
        "#EA4235",
        "#EB8600",
        "#1E8D3E",
        "#F9AB01"
    ]

    items.forEach((item,index) => {
        const itemsHead = item.querySelector(".feature-title h1");
        const itemsHeadi = item.querySelector(".feature-title i");
        const desc = item.querySelector(".feature-description p");
        desc.style.display = "none";
        let isOpen = false;


        item.addEventListener("click", () => {
            isOpen = !isOpen;

            if (isOpen) {
                item.style.height = "50vh";
                item.style.backgroundColor = `${imageurl[index]}`
                item.backgroundPosition = "center";
                item.backgroundSize = "cover";
                item.backgroundRepeat = "no-repeat";
                itemsHead.style.color = "#000000";
                itemsHeadi.style.color = "#000000";
                desc.style.display = "block";
                desc.style.color = "#000";
            } else {
                item.style.height = "15vh";
                item.style.background = "#ffffff4a";
                itemsHead.style.color = "#ffffff";
                itemsHeadi.style.color = "#ffffff";
                desc.style.display = "none";
                desc.style.color = "transparent";
            }

            // Close all other items
            items.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.style.height = "15vh";
                    otherItem.style.background = "#ffffff4a";
                    const otherHead = otherItem.querySelector(".feature-title h1");
                    const otherHeadi = otherItem.querySelector(".feature-title i");
                    const otherDesc = otherItem.querySelector(".feature-description p");
                    otherHead.style.color = "#ffffff";
                    otherHeadi.style.color = "#ffffff";
                    otherDesc.style.display = "none";
                }
            });
        });
    });
}



firstAnimation()
horizontalAnimation()
accordins()