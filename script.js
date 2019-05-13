'use strict';

function getDogImage(input) {
  fetch(`https://dog.ceo/api/breed/${input}/images`)
    //event.preventDefault();
    .then(response => response.json())
    .then(responseJson => {
     if(responseJson.status==="error"){
       displayError(responseJson);

     } else {displayResults(responseJson)}
    }  )
    $('.results').removeClass('hidden');

   
}
function displayError(responseJson){
  $('.images').html(`<p>${responseJson.message}</p>` )

}
function displayResults(responseJson) {
  console.log(responseJson);
    const randomNumber = Math.floor(Math.random()*responseJson.message.length);
      $('.images').html(
    `<img src="${responseJson.message[randomNumber]}">`
  )
}

function watchForm() {
  $('form').on('submit', event => {
   event.preventDefault();
   const input = $('#dog-input').val();
    getDogImage(input);
  });
}

$(function() {
//  console.log('App loaded! Waiting for submit!');
  watchForm();
});
