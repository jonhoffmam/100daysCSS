const container = document.querySelector('.center');

container.addEventListener('click', () => {
		container.classList.toggle('active');	
		container.classList.remove('no-animation');
})
