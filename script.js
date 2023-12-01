'use strict';
const menu = document.querySelector('.menu');
const link_items = document.querySelector('.navigation-bar');
const bgBlur =document.querySelector('.background-blur');
const container = document.querySelector('.container')

menu.addEventListener('click', () => {
  menu.classList.toggle('openmenu');
  link_items.classList.toggle('hidden');
  bgBlur.classList.toggle('hidden')
})

const orderInfo = document.querySelectorAll('.order-info');

const dot =document.querySelectorAll('.dot');


let activeInfo = 0;

// working with dots
const activateDots = function(slide) {
  document.querySelectorAll('.dot').forEach(dotss => {
    dotss.classList.remove('active-dot')
  })


  document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active-dot')
}

//Working with the Slider
const curSlide = function(s) {
  orderInfo.forEach((ordInfo, index) => {
  ordInfo.style.transform = `translateX(${100 * (index - s)}%)`
});
}

curSlide(0);



setInterval(function(){
  if(activeInfo < orderInfo.length) {
    if(activeInfo ===orderInfo.length -1) {
      activeInfo = 0;
    } else {
      activeInfo++;
    }
    
    curSlide(activeInfo);
    activateDots(activeInfo)
  }
}, 5000);

// Working with Food series
const series = document.querySelector('.series');

series.addEventListener('click', function(e){
  const clicked = e.target.closest('.series-info');

  if(clicked) {
    document.querySelectorAll('.series-info').forEach(series => {
      series.classList.remove('active-series')
    });

    document.querySelectorAll('.series-detail').forEach(sDetail => {
      sDetail.classList.remove('active-detail')
    })
    


    document.querySelector(`.series-${clicked.dataset.clic}`).classList.add('active-series');

    document.querySelector(`.detail-${clicked.dataset.clic}`).classList.add('active-detail');
  }
});

// Working with Series display



// Working with advert
// let typed = new Typed('.typing', {
//   strings: [
//     "Get delivered while it is still hot.",
//     "Fast food as much as you can eat, get it delivered.",
//     "Super delicious pizza hot & fresh from the oven",
//     "Delicious Naija meals, as e dey hot e dey sweet",
//     "Chinese delicacies. Hot, tasty and divine",
//   ],
//   typeSpeed: 50,
//   loop: true,
// });


// Working with Testimonial
const testi_list = document.querySelectorAll('.testi');
const noTest = document.querySelector('.no-testi');
let activeNo = document.querySelector('.active-no')
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

let testNo = 0;
// testi_list.forEach(tList => {
//   tList.
// })

noTest.innerHTML = `${testi_list.length}`.padStart(2, '0');

const culSlide = function(s){
  testi_list.forEach((tList, index) => {
    tList.style.transform = `translateX(${100 * (index - s)}%)`
  });
}

culSlide(0);


arrowRight.addEventListener('click', function(e){
  if(testNo < testi_list.length) {
    if(testNo === testi_list.length -1) {
      testNo =0;

    } else {
      testNo++;

    }

    culSlide(testNo)
  }

  if(testNo < testi_list.length) {
    console.log(testNo, testi_list.length -1)
    activeNo.innerHTML = `${testNo +1}`.padStart(2, '0');
  }

})

arrowLeft.addEventListener('click', function(){

  if(testNo < testi_list.length){
    if(testNo === 0 ) {
      testNo = testi_list.length -1;

    } else {
      testNo--;

    }
    culSlide(testNo)

  }

  if(testNo < testi_list.length) {
    console.log(testNo, testi_list.length -1)
    activeNo.innerHTML = `${testNo +1}`.padStart(2, '0');
  }
})