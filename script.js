'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breed/hound/images/random')
    //event.preventDefault();
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
   
}
function displayResults(responseJson) {
 // console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');}

function watchForm() {
  $('form').on('submit', event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
