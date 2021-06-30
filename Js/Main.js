/*------------------ Page Loader ----------------------*/
window.addEventListener('load', () => {
	document.querySelector('.main').classList.remove('hidden');
	document.querySelector('.home-section').classList.add('active');
	// loader
	document.querySelector('.page-loader').classList.add('fade-out');
	setTimeout(() => {
		document.querySelector('.page-loader').style.display = 'none';
	}, 600);
});
/*------------------ Toggle Navbar ------------------*/
const navToggler = document.querySelector('.nav-togger');
navToggler.addEventListener('click', () => {
	hideSection();
	toggleNavbar();
	document.body.classList.toggle('hide-scrolling');
});

function hideSection() {
	document.querySelector('section.active').classList.toggle('fade-out');
}
function toggleNavbar() {
	document.querySelector('.header-menu').classList.toggle('active');
}

/*------------------ Active Section ------------------*/
document.addEventListener('click', (e) => {
	if (e.target.classList.contains('link-item') && e.target.hash !== '') {
		// activate the overlay to prevet multiple click
		document.querySelector('.overlay').classList.add('active');
		navToggler.classList.add('hide');
		if (e.target.classList.contains('nav-item')) {
			toggleNavbar();
		} else {
			hideSection();
			document.body.classList.add('hide-scrolling');
		}
		setTimeout(() => {
			document
				.querySelector('section.active')
				.classList.remove('active', 'fade-out');
			document.querySelector(e.target.hash).classList.add('active');
			window.scrollTo(0, 0);
			document.body.classList.remove('hide-scrolling');
			navToggler.classList.remove('hide');
			document.querySelector('.overlay').classList.remove('active');
		}, 500);
	}
});
/*------------------ About Beginning ------------------*/
const tabsContainer = document.querySelector('.about-beginning');
const aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', (e) => {
	if (
		e.target.classList.contains('tab-item') &&
		!e.target.classList.contains('active')
	) {
		tabsContainer.querySelector('.active').classList.remove('active');
		e.target.classList.add('active');
		const target = e.target.getAttribute('data-target');
		aboutSection.querySelector('.tab-content.active').classList.remove('active');
		aboutSection.querySelector(target).classList.add('active');
	}
});

/*------------------ Services Item Details Popup ------------------*/
document.addEventListener('click', (e) => {
	if (e.target.classList.contains('see-more-btn')) {
		toggleServicePopup();
		document.querySelector('.services-popup').scrollTo(0, 0);
		servicesItemDetails(e.target.parentElement);
	}
});

function toggleServicePopup() {
	document.querySelector('.services-popup').classList.toggle('open');
	document.body.classList.toggle('hide-scrolling');
	document.querySelector('.main').classList.toggle('fade-out');
}

document.querySelector('.pp-close').addEventListener('click', toggleServicePopup);

//Hide popup when clicking outside of it
document.addEventListener('click', (e) => {
	if (e.target.classList.contains('pp-inner')) {
		toggleServicePopup();
	}
});

function servicesItemDetails(serviceItem) {
	document.querySelector('.pp-thumbnail img').src = serviceItem.querySelector(
		'.services-item-thumbnail img'
	).src;

	document.querySelector('.pp-header h3').innerHTML =
		serviceItem.querySelector('.service-item-title').innerHTML;

	document.querySelector('.pp-body').innerHTML = serviceItem.querySelector(
		'.services-item-details'
	).innerHTML;
}

/*------------------ Testimonial Slider ------------------*/
const next = document.querySelector('.nextbtn');
const prev = document.querySelector('.prevbtn');
const slides = document.querySelectorAll('.slide_items');

let index = 0;
display(index);
function display(index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}

function nextSlide() {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}

function prevSlide() {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
