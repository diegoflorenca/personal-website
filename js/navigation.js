const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('nav');

mobileNavToggle.addEventListener('click', menuToggle);

function menuToggle() {
	const visibility = nav.getAttribute('data-visible');

	if (visibility === 'false') {
		nav.setAttribute('data-visible', true);
		mobileNavToggle.setAttribute('aria-expanded', true);
	} else {
		nav.setAttribute('data-visible', false);
		mobileNavToggle.setAttribute('aria-expanded', false);
	}
}
