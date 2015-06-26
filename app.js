$(document).ready(function() {
  page.init();
}),

page = {

 init: function() {

   page.initStyling();
   page.initEvents();

 },

initStyling: function() {

},

initEvents: function() {
  page.playAgain();
  page.kickoff();
  page.start();
},

start: function() {

    $('body').on('click', '#startButton', function(event){
      event.preventDefault();
      $('.menuPage').fadeOut()
      $('.gamePage').fadeIn("slow")
      $("html, body").animate({ scrollTop: 250 }, 2000);

    })
},

kickoff: function() {

  $('.field').on('click', '#ball', function(event){
    event.preventDefault();
      var kicker = new page.kicker()
      var goalie = new page.goalie()
      page.unbind();
      page.keepScore(kicker, goalie);
      page.shotsLeft();
      page.scoreBalls();
      page.scoreBoard();
      page.youLose();
      page.youWin();

    })
},

myRandom: function() {
  var random = Math.floor(Math.random() * 5)
  return random
},

keepScore: function(kicker, goalie) {
  if (kicker.score > goalie.score) {
    $('#goalieMiss').addClass('flex')
    $('#goalieMiss').show()
    $('#goalieMiss').fadeOut(1500)
    page.GOOOOAAAAALLL();
    page.score();
  } else {
    $('#goalieSave').addClass('flex')
    $('#goalieSave').show()
    $('#goalieSave').fadeOut(1500)
  }
},


score: function() {
  var gameScore = $('#ball').data("value")
  $('#ball').data("value", gameScore += 1);
},


kicker: function (options) {
 // var specialPower = Math.floor(Math.random() * 10)
  this.name = "player 1" || options.name
  this.power =  page.myRandom();
  this.agility =  page.myRandom();
  this.speed =  page.myRandom();
  // this.special = specialPower;
  this.score = (this.power + this.agility + this.speed) || 6
  // this.specialScore = this.score + this.special
  console.log("kicker Score: ", this.score)
  // console.log(this.specialScore);

  // this.kick = function(goalie, ability) {
  //   var regChance = Math.floor(Math.random() + this.score);
  //   var spcChance = Math.floor(Math.random() + this.specialscore);
  // };
},

// specialPower: function(options) {
//   this.name = "flying flamingo Kick"
//   this.power = Math.floor(Math.random() * 10)
//   console.log(this.power);
// },

goalie: function (options) {
  // var specialPower = Math.floor(Math.random() * 10)
  this.name = "Ralph"
  this.save =  page.myRandom();
  this.agility =  page.myRandom();
  this.speed =  page.myRandom();
  // this.special = specialPower
  this.score = this.save + this.agility + this.speed
  // this.specialScore = this.score + this.special
  console.log("Goalie Score: ", this.score);
  // console.log(this.specialScore);
},


scoreBalls: function() {
var ballValue = $('#ball').data("value")
  if (ballValue  === 1) {
    $('#ball1').fadeIn(1500)

  } else if (ballValue === 2) {

    $('#ball2').fadeIn(1500)

  }
    else if (ballValue === 3) {

    $('#ball3').fadeIn(1500)

  }
},

goodByeBalls: function() {
  $('#ball1').fadeOut(1500)
  $('#ball2').fadeOut(1500)
  $('#ball3').fadeOut(1500)
},


shotsLeft: function() {
  var button = $('#ball')
  var shotsLeft = button.attr("rel")
  var shotsMinus = button.attr("rel", --shotsLeft);
},

unbind: function() {
  var shotsLeft = $('#ball').attr("rel")
  if (shotsLeft < 1) {
    $('.field').off('click', '#ball')
  }
},


youLose: function() {
  var shotsLeft = $('#ball').attr("rel")
  var scoreBalls = $('#ball').data("value")
  var loseScore = scoreBalls < 3
  var loseShots = shotsLeft < 1
  console.log(scoreBalls);
  console.log(shotsLeft);

  if (loseShots && loseScore) {
      setTimeout(function () {
        page.showTitles();
        page.showLose();
        $('.lose').fadeOut(1500)
      }, 2000);

      setTimeout(function () {
        $('.video').removeClass('none')
        $('.video').addClass('activePage')
        page.video("dQw4w9WgXcQ", 700, 400)
      }, 4000);
    }
},

video: function autoPlayVideo(vcode, width, height){
  "use strict";

  $(".video").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe><button class="playAgain" type="button" name="button">Play Again?</button>');

},

youWin: function() {
  var ballValue = $('#ball').data("value")
  if (ballValue > 2) {
    page.unbind();
    setTimeout(function () {
      page.showTitles();
      page.showWin();
    }, 2000);

  }
},

scoreBoard: function() {
  var score = $('#ball').data("value")
  var shotsLeft = $('#ball').attr("rel")

  $('.shots').html("")
  $('.shots').append(shotsLeft)
  $('.score').html("")
  $('.score').append(score)
},

GOOOOAAAAALLL: function() {

  page.showTitles();
  $('#goal').removeClass('none')
  $('#goal').addClass('activePage')

  setTimeout(function () {
    $('#goal').removeClass('activePage')
    $('#goal').addClass('none')
    page.hideTitles();

  }, 2000);
},

playAgain: function() {
  $('body').on('click', '.playAgain', function(event){
    event.preventDefault();

    $('#ball').attr("rel", 5)
    $('#ball').data("value", 0)
    page.hideTitles();
    page.hideWin();
    page.hideLose();
    $('.video').removeClass('activePage')
    $('.video').addClass('none')
    $('.shots').html(5)
    $('.score').html(0)
    page.goodByeBalls();
    $('.field').on('click', '#ball', function(event){
      event.preventDefault();
    })
  })
},

hideTitles: function() {
  $('.titles').removeClass('flex')
  $('.titles').addClass('none')
},

showTitles: function() {
  $('.titles').removeClass('none')
  $('.titles').addClass('flex')
},

hideLose: function() {
  $('.lose').removeClass('activePage')
  $('.lose').addClass('none')
},

showLose: function() {
  $('.lose').removeClass('none')
  $('.lose').addClass('activePage')
},

hideWin: function() {
  $('.winner').removeClass('activePage')
  $('.winner').addClass('none')
},

showWin: function() {
  $('.winner').removeClass('none')
  $('.winner').addClass('activePage')
}

}
