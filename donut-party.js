$(document).ready(function() {

  $('#count').submit(function(){

    var numGuests = parseInt($(this).find('input:eq(0)').val());

    var numDonuts = parseInt($(this).find('input:eq(1)').val());

    if(numGuests < numDonuts){
      $('h2').html("Yes! So many donuts!");
      $('#return').append('<img src="http://www.us.all.biz/img/us/catalog/8653.jpeg" alt="many">');
    }else if(numGuests > numDonuts){
      $('h2').html("We don't have enough donuts!!! :(");
      $('#return').append('<img src="http://cdn02.cdnwp.celebuzz.com/wp-content/uploads/2013/05/18/tina-fey-macncheese.gif" alt="many">');
    }else{
      $('h2').html("I guess we have enough donuts...");
      $('#return').append('<img src="http://www.windmillcandies.com/product_images/o/546/Potato-Donuts__65295_zoom.jpg" alt="many">');
    }

    return false;

  });
});