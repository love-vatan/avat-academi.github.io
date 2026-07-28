/* ==========================================
   Scroll Reveal
========================================== */

const revealElements = document.querySelectorAll(
`
.hero-content,
.hero-visual,
.trust-grid,
.feature-card,
.step,
.category-card,
.course-card,
.instructor-photo,
.instructor-content,
.gallery-grid div,
.testimonial-card,
.faq-item,
.cta-box
`
);

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("reveal");

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el => {

el.classList.add("fade-up");

observer.observe(el);

});

/* ==========================================
   Hero Parallax
========================================== */

const drone =
document.querySelector(".hero-visual");

window.addEventListener("mousemove",(e)=>{

const x =
(window.innerWidth / 2 - e.clientX) / 40;

const y =
(window.innerHeight / 2 - e.clientY) / 40;

drone.style.transform =
`translate(${x}px, ${y}px)`;

});

/* ==========================================
   Stagger Cards
========================================== */

const cards =
document.querySelectorAll(
".feature-card,.course-card"
);

cards.forEach((card,index)=>{

card.style.transitionDelay =
`${index * 80}ms`;

});