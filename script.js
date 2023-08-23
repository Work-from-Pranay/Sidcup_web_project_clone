var crsr=document.querySelector("#cursor")
var crsr_blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsr_blur.style.left=dets.x-200+"px"
    crsr_blur.style.top=dets.y-200+"px"
})

var h4all=document.querySelectorAll("#nav")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4
        crsr.style.border="1px solid #fff"
        crsr.style.cursor="pointer"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid"
        crsr.style.backgroundColor="#95C11E"
    })
})
var wait4=document.querySelectorAll("#page4")
wait4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4
        crsr.style.border="1px solid #fff"
        crsr.style.cursor="pointer"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid"
        crsr.style.backgroundColor="#95C11E"
    })
})
var cardCursor=document.querySelectorAll(".cards")
cardCursor.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4
        crsr.style.border="1px solid #fff"
        crsr.style.cursor="pointer"
        crsr.style.backgroundColor="transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid"
        crsr.style.backgroundColor="#95C11E"
    })
})
var footerCursor=document.querySelectorAll("#footer")
footerCursor.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4
        crsr.style.border="1px solid #fff"
        crsr.style.cursor="pointer"
        crsr.style.backgroundColor="transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid"
        crsr.style.backgroundColor="#95C11E"
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"120px",

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
    //   markers:true,
      start: "top -23%",
      end: "top -70%",
      scrub: 2,
    },
  });



  gsap.from("#about-us-in,#about-us img",{
    y:90,
    duration:1,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
  });
  
  
  gsap.from(".cards",{
    scale:0.9,
    duration:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:1
    }
  })
  gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:3
    }
  })
  gsap.from("#colon2",{
    y:70,
    x:70,
    duration:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:4
    }
  })
  gsap.from("#page4 h1",{
    y:50,
    duration:0.4,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 85%",
        end:"top 75%",
        scrub:3
    }
  })