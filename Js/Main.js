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
const btn = document.getElementsByClassName('btn-slide');
const slider = document.getElementById('slider');

btn[0].onclick = function () {
	slider.style.transform = 'translateX(0px)';
	for (i = 0; i < 4; i++) {
		btn[i].classList.remove('active-sld');
	}
	this.classList.add('active-sld');
};
btn[1].onclick = function () {
	slider.style.transform = 'translateX(-800px)';
	for (i = 0; i < 4; i++) {
		btn[i].classList.remove('active-sld');
	}
	this.classList.add('active-sld');
};
btn[2].onclick = function () {
	slider.style.transform = 'translateX(-1600px)';
	for (i = 0; i < 4; i++) {
		btn[i].classList.remove('active-sld');
	}
	this.classList.add('active-sld');
};
btn[3].onclick = function () {
	slider.style.transform = 'translateX(-2400px)';
	for (i = 0; i < 4; i++) {
		btn[i].classList.remove('active-sld');
	}
	this.classList.add('active-sld');
};
