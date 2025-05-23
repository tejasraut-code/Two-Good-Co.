// This is locomotive code works very well but not work with scrolltrigger
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// })

function locomotiveAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotiveAnimations()

function gsappage1() {
    gsap.to(".navpart1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        }
    })
    gsap.to(".navpart2 #links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        }
    })
    gsap.to(".navpart1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        }
    })
    gsap.to(".navpart1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        }
    })
}
gsappage1()

function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#circle");

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            opacity: 1,
            scale: 1,
        })
    })
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0,
        })
    })
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            top: dets.y - 70,
            left: dets.x - 70,
        })
    })
}
videoconAnimation()

function loadinganimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.4,
        duration: 0.6,
        stagger: 0.5,
    })

    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 0.4,
        duration: 0.5,
    })

    gsap.from("#page4 h1", {
        transform: "translateY(100%)",
        opacity: 0,
        delay: 0.2,
        duration: 0.3,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
        }
    })

    gsap.from("#page6 svg", {
        transform: "translateY(100%)",
        opacity: 0,
        delay: 0.5,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
        }
    })
}

loadinganimation()


function cursorAnimation() {

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y,
        })
    })

    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%)scale(1)",
            });
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%)scale(0)",
            });
        });
    });


}

cursorAnimation()
