 // get File json
 $(document).ready(function() {

     $.get("https://api.myjson.com/bins/l9pn3", function(data) {
         var $gamesItem = $("#GamesItem");
         $.each(data, function() {
             ele = $gamesItem.clone()
             ele.removeAttr("id");
             ele.find("img").attr("src", this.imageURL);
             ele.find(".product-title h1").html(this.name);
             ele.find(".product-description p").html(this.publisher);
             ele.find("[data-rating]").data("rating", this.rating)

             $(".games-1,.games-2,.games-3").append(ele.show())
         })
         initCarousel();
         // stars
         productRading();

     });
 });

 // bootstrap Slide menu 
 $(document).ready(function() {
     $("#sidebar").mCustomScrollbar({
         theme: "minimal"
     });

     $('#dismiss, .overlay').on('click', function() {
         $('#sidebar').removeClass('active');
         $('.overlay').fadeOut();
     });

     $('#sidebarCollapse').on('click', function() {
         $('#sidebar').addClass('active');
         $('.overlay').fadeIn();
         $('.collapse.in').toggleClass('in');
         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
     });
 });
 // search bar
 $(document).ready(function() {

     $('#buttonsearch').click(function() {
         $('#formsearch').slideToggle("fast", function() {
             $('#content').toggleClass("moremargin");
         });
         $('#searchbox').focus()
         $('.openclosesearch').toggle();
     });
 });

 function initCarousel() {
     $('.owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         autoplay: true,

         responsive: {
             0: {
                 items: 2.5
             },
             600: {
                 items: 4.5
             },
             1000: {
                 items: 4.5
             }
         }
     });
 }
 // Stars 
 function productRading() {
     $("[data-rating]").each(function() {
         var rating = parseFloat($(this).data('rating'));
         // Getter
         var ratedFill = $("#rateYo").rateYo("option", "ratedFill");
         $("#rateYo").rateYo("option", "ratedFill", "#000")
         $(this).rateYo({
             fullStar: 1,
             rating: rating,
             starWidth: '13px',
             readOnly: true
         });
     })
 }