'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breed/hound/images/random')
    //event.preventDefault();
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
   
}
function displayResults(responseJson) {
 //console.log(responseJson);
$('.images').replaceWith(
    `<img src="${responseJson.message}">`
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
