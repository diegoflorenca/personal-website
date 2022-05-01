const scrollOffset = 500;
const fixedHeader = document.querySelector('.fixed-header');
const avatar = document.querySelector('#avatar');

window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		fixedHeader.classList.add('active');
	} else {
		fixedHeader.classList.remove('active');
	}

	if (window.scrollY > scrollOffset) {
		avatar.classList.add('active');
	} else {
		avatar.classList.remove('active');
	}
});
