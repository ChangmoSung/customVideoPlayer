const player = document.querySelector(`.player`);
const video = player.querySelector(`.viewer`);
const progress = player.querySelector(`.progress`);
const progressBar = player.querySelector(`.progress__filled`);
const toggle = player.querySelector(`.toggle`);
const skipButtons = player.querySelectorAll(`[data-skip]`);
const ranges = player.querySelectorAll(`.player__slider`);

function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playbuttonStyle()
}

function playbuttonStyle() {
  const icon = video.paused ? `>>` : `>`;
  toggle.textContent = icon;
}

function skip() {
  const skipTime = this.dataset.skip;
  video.currentTime += parseFloat(skipTime)
}

function rangeUpdate() {
  video[this.name] = this.value;
  console.log(`ds`)
}

function bar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e)
  const videoTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = videoTime;
}

video.addEventListener(`click`, togglePlay);
toggle.addEventListener(`click`, togglePlay);
skipButtons.forEach(button => button.addEventListener(`click`, skip));
ranges.forEach(range => range.addEventListener(`change`, rangeUpdate));

video.addEventListener(`timeupdate`, bar);

let scrubbing = false;
progress.addEventListener(`click`, scrub);
progress.addEventListener(`mousedown`, () => {
  scrubbing = true;
});
progress.addEventListener(`mouseup`, () => scrubbing = false);
progress.addEventListener(`mousemove`, (e) => scrubbing && scrub(e));













































// const player = document.querySelector(`.player`);
// const video = player.querySelector(`.viewer`);
// const progress = player.querySelector(`.progress`);
// const progressBar = player.querySelector(`.progress__filled`);
// const toggle = player.querySelector(`.toggle`);
// const skipButtons = player.querySelectorAll(`[data-skip]`);
// const ranges = player.querySelectorAll(`.player__slider`);

// function togglePlay() {
//   // const method = video.paused ? `play` : `pause`;
//   if(video.paused) {
//     video.play()
//     toggle.textContent =`>>`;

//   } else {
//     video.pause();
//     toggle.textContent =`>`;
//   }
// }

// function skip() {
//   video.currentTime += parseFloat(this.dataset.skip);
// }

// function handleRangeUpdate() {
//   video[this.name] = this.value;
// }

// function handleProgress() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressBar.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//   video.currentTime = scrubTime;
// }

// video.addEventListener(`click`, togglePlay);
// video.addEventListener(`timeupdate`, handleProgress);
// toggle.addEventListener(`click`, togglePlay);
// skipButtons.forEach(button => button.addEventListener(`click`, skip));
// ranges.forEach(range => range.addEventListener(`change`, handleRangeUpdate));
// ranges.forEach(range => range.addEventListener(`mousemove`, handleRangeUpdate));

// let scrubbing = false;
// progress.addEventListener(`click`, scrub);
// progress.addEventListener(`mousemove`, (e) => scrubbing && scrub(e));
// progress.addEventListener(`mousedown`, () => scrubbing = true);
// progress.addEventListener(`mouseup`, () => scrubbing = false);






















































// function togglePlay() {
//   // const method = video.paused ? `play` : `pause`;
//   // video[method]();
//   // console.log(video);
//   if(video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
  
// }

// function updateButton() {
//   const icon = this.paused ? '>>' : '>';
//   toggle.textContent = icon;
//   // console.log(icon)
// }

// function skip() {
//   console.log(this.dataset);
//   video.currentTime += parseFloat(this.dataset.skip);
// }

// function handleRangeUpdate() {
//   video[this.name] = this.value;
// }

// function handleProgress() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressBar.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//   video.currentTime = scrubTime;
//   console.log(e);
// }

// video.addEventListener(`click`, togglePlay);
// video.addEventListener(`play`, updateButton);
// video.addEventListener(`pause`, updateButton);
// video.addEventListener(`timeupdate`, handleProgress);


// toggle.addEventListener(`click`, togglePlay);
// skipButtons.forEach(button => button.addEventListener(`click`, skip));
// ranges.forEach(range => range.addEventListener(`change`, handleRangeUpdate));
// ranges.forEach(range => range.addEventListener(`mousemove`, handleRangeUpdate));

// let mousedown = false;
// progress.addEventListener(`click`, scrub);
// progress.addEventListener(`mousemove`, (e) => mousedown && scrub(e));
// progress.addEventListener(`mousedown`, () => mousedown = true);
// progress.addEventListener(`mouseup`, () => mousedown = false);


