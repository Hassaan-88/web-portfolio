/*********** Wow js Init ***********/
new WOW().init();

/*********** Skills Counter Animation ***********/
var x = 0;
$(window).scroll(function () {
	var scrollCounter = $("#skills-counter");
	if(scrollCounter.length){
		var scrollTo = scrollCounter.offset().top - window.innerHeight;
		if (x == 0 && $(window).scrollTop() >= scrollTo) {
			$(".skill-count").each(function () {
				$(this)
					.prop("Counter", 0)
					.animate(
					{
						Counter: $(this).text(),
					},
					{
						duration: 3000,
						easing: "swing",
						step: function (now) {
							$(this).text(Math.ceil(now) + "%");
						},
					}
				);
			});
			x = 1;
		}	
	}
});

jQuery(document).ready(function () {
  /*********** Hide the scroll btn on window scroll in course inner pages ***********/
  var lastScrollTop = 0;
  var hideScrollBtn = jQuery("#scroll-down-btn");
  jQuery(window).scroll(function (event) {
    var st = jQuery(this).scrollTop();
    if (st > lastScrollTop) {
      hideScrollBtn.fadeOut();
    } else {
      hideScrollBtn.fadeIn();
    }
    lastScrollTop = st;
  });

  /*********** Testimonial Slider Init ***********/
  $(".carousel-primary").slick({
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 834,
        settings: {
          centerMode: false,
          autoplay: false,
          speed: 300,
          slidesToShow: 1,
        },
      },
    ],
  });

  /*********** Anchor to section ***********/
  $('[data-anchor="sec-anchor"]').click(function () {
    $('[data-anchor="sec-anchor"]').removeClass("active");
    $(this).addClass("active");
  });

  /*********** Mobile Menu Toggle ***********/
  function hamMenuToggleElems() {
    $(".mob-menu-container").toggleClass("menu-opened");
    $(".hamburger-btn").toggleClass("hamburger-btn-toggle");
    $(".master-header-wrapper").toggleClass("master-header-wrapper--dark-bg");
    setTimeout(() => {
      $(".main-menu-wrapper").toggleClass("menu-visible");
    }, 50);
  }
  $('[data-toggle="mob-menu-trigger"]').click(function () {
    hamMenuToggleElems();
  });

  /*********** Mobile Menu Nav Links Scroll to Section  ***********/
  jQuery('.master-header-mob a').click(function () {
    hamMenuToggleElems();
  });

  jQuery(".master-header-wrapper .main-menu-wrapper li:last-child").addClass("btn-link");
});

/*********** Portfolio Showcase Carousel ***********/
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".portfolio-carousel");
	if(elems){
		var instances = M.Carousel.init(elems, {
			// indicators: true,
			padding: 150,
		});
		var autoplayInterval;
		function startAutoplay() {
			autoplayInterval = setInterval(function () {
				instances.forEach(function (instance) {
					instance.next();
				});
			}, 5000);
		}
		function stopAutoplay() {
			clearInterval(autoplayInterval);
		}
		startAutoplay();
		elems.forEach(function (carousel) {
			carousel.addEventListener("mouseenter", stopAutoplay);
			carousel.addEventListener("mouseleave", startAutoplay);
		});
	}
});

/*********** Mouse Cursor Scripts ***********/
let cursorElem = document.querySelector(".cursor");
let navlinks = document.querySelectorAll(".main-menu-wrapper a");
let globBtn = document.querySelectorAll(".btn");
let scrollBtn = document.querySelector(".scroll-btn-wrapper");

function cursorMov(e) {
  cursorElem.style.top = e.pageY + "px";
  cursorElem.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursorMov);

navlinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursorElem.classList.add("hide-cursor");
  });
  link.addEventListener("mouseleave", () => {
    cursorElem.classList.remove("hide-cursor");
  });
});

globBtn.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    cursorElem.classList.add("hide-cursor");
  });
  btn.addEventListener("mouseleave", () => {
    cursorElem.classList.remove("hide-cursor");
  });
});

if(scrollBtn){
	scrollBtn.addEventListener("mouseenter", () => {
  cursorElem.classList.add("hide-cursor");
});

scrollBtn.addEventListener("mouseleave", () => {
  cursorElem.classList.remove("hide-cursor");
});
}

/*********** On Footer Scroll Show Social Media List Script ***********/
const footerSec = document.querySelector("#contact-us");
window.addEventListener("scroll", function () {
  const footerTop = footerSec.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (footerTop <= viewportHeight) {
    document.querySelector('.social-handles-list').style.marginLeft = "0";
  }
});

/*********** Single Project Page Overview Screen ***********/
document.addEventListener("DOMContentLoaded", function(){
	const projPrevScreen = document.querySelector(".proj-overview-screen");
	const projPrevImg = document.querySelector(".proj-overview-screen img");
	if(projPrevScreen && projPrevImg){
		let projPrevImgHght = projPrevImg.height;
		let projPrevImgCalc = (projPrevImgHght - 500) + 30;
		projPrevImg.style.bottom = `-${projPrevImgCalc}px`;
	}
});

/*********** Archive Projects Isotope Filters ***********/
jQuery(document).ready(function($){
	$('.portfolio-filter-list [data-filter="all"]').addClass("active");
	var $grid = $(".archive-portf-grid").isotope({
		itemSelector: '.post',
		layoutMode: 'fitRows'
	});

	function toggleFilterClass(currentElem){
		$(".portfolio-filter-list li").removeClass("active");
		$(currentElem).addClass("active");
	}

	$(".portfolio-filter-list li").click(function(){
		toggleFilterClass(this);
		const filterAttr = $(this).data("filter");
		if(filterAttr === 'all'){
			$grid.isotope({
				filter: '*'
			});
		}
		else{
			$grid.isotope({
				filter: '.'+filterAttr
			});
		}
	});
});

/*********** Archive Project Page Banner Script ***********/
document.addEventListener('DOMContentLoaded', function(){
	const entryBanner = document.querySelector('.archive-portf-banner');
	if(entryBanner){
		setTimeout(()=>{
			entryBanner.classList.add("active");
		}, 2500);
	}
});

/*********** Portfolio Popup Script ***********/
// const portfModals = document.querySelectorAll(".portf-modal");
// const modalCloseBtns = document.querySelectorAll(".portf-modal .portf-modal-container .close-icon");

// modalCloseBtns.forEach((modalCloseBtn)=>{
// 	modalCloseBtn.addEventListener('click', (e)=>{
// 		e.preventDefault();
// 		portfModals.forEach((portfModal)=>{
// 			portfModal.classList.remove("show-modal");
// 		});
// 	});
// });


// const portfModalX = document.querySelectorAll(".carousel-item .portf-modal");
// const modalTriggerElems = document.querySelectorAll(".portf_modal-trigger");

// modalTriggerElems.forEach(modalTriggerElem => {
//   modalTriggerElem.addEventListener("click", (e) => {
//     e.preventDefault();

//     // Find the closest modal to the clicked trigger
//     const closestModal = modalTriggerElem.closest(".carousel-item").querySelector(".portf-modal");
    
//     if (closestModal) {
//       closestModal.classList.add("show-modal");
//     }
//   });
// });
