const scrollOffset = 500;
const primaryHeader = document.querySelector('.primary-header');
const avatar = document.querySelector('#avatar');

window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		primaryHeader.classList.add('active');
	} else {
		primaryHeader.classList.remove('active');
	}

	if (window.scrollY > scrollOffset) {
		avatar.classList.add('active');
	} else {
		avatar.classList.remove('active');
	}
});
