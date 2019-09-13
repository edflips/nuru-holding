import 'bootstrap';
import { jarallax } from 'jarallax';
import SweetScroll from 'sweet-scroll';

// sweet-scroll
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // eslint-disable-next-line no-unused-vars
    const sweetScroll = new SweetScroll({
      offset: 0, // Specifies the value to offset the scroll position in pixels
    });
  },
  false,
);

// jarallax
jarallax(document.querySelectorAll('.jarallax'), {
  speed: -0.2,
  disableParallax: /iPad|iPhone|iPod|Android/,
});

// Scroll off top
const headerNav = document.querySelector('header');
const scrollTop = document.querySelector('a.scroll-top');
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (window.scrollY <= 50) {
        headerNav.classList.add('top');
      } else {
        headerNav.classList.remove('top');
      }

      if (window.scrollY >= 1000) {
        scrollTop.classList.add('on');
      } else {
        scrollTop.classList.remove('on');
      }

      ticking = false;
    });
    ticking = true;
  }
};

window.addEventListener('scroll', handleScroll);

// Crossfade strapline
const straplineContainer = document.querySelector('.vision-branding .strap');
const strapEn = straplineContainer.querySelector('.en');
const strapFr = straplineContainer.querySelector('.fr');
const straplines = [strapEn, strapFr];

setInterval(() => {
  straplines.map((strapline) => strapline.classList.toggle('visible'));
}, 4000);


// Team member reveal
const teamSection = document.querySelector('#team');
const members = teamSection.querySelectorAll('.team-member');

function revealBio() {
  // const detail = this.querySelector('.detail');
  this.classList.add('on');
}

function hideBio() {
  // const detail = this.querySelector('.detail');
  this.classList.remove('on');
}

// function toggleBio() {
//   // const detail = this.querySelector('.detail');
//   this.classList.toggle('on');
// }

members.forEach((member) => {
  member.addEventListener('touchstart', revealBio);
  member.addEventListener('touchend', hideBio);
  member.addEventListener('mouseover', revealBio);
  member.addEventListener('mouseout', hideBio);
});
