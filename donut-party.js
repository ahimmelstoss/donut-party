$(document).ready(function() {

var numGuests = parseInt(prompt("How many guests?"));

var numDonuts = parseInt(prompt("How many donuts?"));

if(numGuests < numDonuts){
  $('p').text("We are happy! So many donuts!");
}else if(numGuests > numDonuts){
  $('p').text("We don't have enough donuts!!! :(");
}else{
  $('p').text("I guess we have enough donuts...");
}

});