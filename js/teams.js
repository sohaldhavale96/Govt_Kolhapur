gsap.registerPlugin(ScrollTrigger)
const frames = {
    curIndex:0,
    maxIndex:225
}
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")
let imagesLoaded = 0
let images = []
function preload(){
    for(let i=1;i<=frames.maxIndex;i++){
        const  imgurl = `/assets/frames/frame_${i.toString().padStart(4,"0")}.jpeg`
        const img = new Image()
        img.src = imgurl
        img.onload = ()=>{
            imagesLoaded++;
            if(imagesLoaded===frames.maxIndex){
                loadImage(frames.curIndex)
            }
        }
        images.push(img)
    }
}

function loadImage(index){
    if(index>=0&&index<=frames.maxIndex){
        const img = images[index]
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX,scaleY)
        const newWidth = img.width * scale;
        const newHeight = img.height * scale;
        const offsetX = (canvas.width - newWidth)/2;
        const offsetY = (canvas.height - newHeight) / 2;
        context.clearRect(0,0,canvas.width,canvas.height)
        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = "high"
        context.drawImage(img,offsetX,offsetY,newWidth,newHeight)
        frames.curIndex = index
    }
}

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".frames",
        start:"top top",
        scrub:2
    }
})
tl.to(frames,{
    curIndex:frames.maxIndex,
    onUpdate:function(){
        loadImage(Math.floor(frames.curIndex))
    }
})

preload()