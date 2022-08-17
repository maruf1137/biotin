// video

const video = document.querySelector('.video-wrapper > video');
const videoWrapper = document.querySelector('.video-wrapper');
const videoController = document.querySelectorAll('.video-controller');

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
	if (method === 'play') {
		videoWrapper.classList.add('play');
	} else {
		videoWrapper.classList.remove('play');
	}
}

video.addEventListener('click', togglePlay);
video.addEventListener('ended', () => {
	videoWrapper.classList.remove('play');
});
videoController.forEach((e) => {
	e.addEventListener('click', togglePlay);
});

// mbl nav
const mblNavBtn = document.querySelector('.nav-mbl-btn');
const nav = document.querySelector('.nav');

mblNavBtn.addEventListener('click', () => {
	nav.classList.toggle('show-nav');
});
