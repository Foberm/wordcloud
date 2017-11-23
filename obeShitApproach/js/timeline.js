let animation_progress = 1
let anim = null
let intro = true


var sheet = document.createElement('style'),
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {
  var curVal = el.value,
      val = (curVal-1) * 8.3333333,
      style = '';
  let y = parseInt(el.value) + 2003
  $('#year').html(y)

  animation_progress = parseInt(curVal)
  update(animation_progress-1)


  // Set active label
  $('.range-labels li').removeClass('active selected');

  var curLabel = $('.range-labels').find('li:nth-child(' + (curVal) + ')');

  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');


  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, #c7254e 0%, #c7254e ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #c7254e 0%, #c7254e ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});



// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  $rangeInput.val(index+1).trigger('input');
  animation_progress = index+1
});


function startAnimation() {
    anim = setInterval(function() {
      $rangeInput.val(animation_progress).trigger('input');
      animation_progress = (animation_progress < 13) ? animation_progress+1 : 1
    }, 3000)
}

$('text').on('mouseover', function() {
    if(!intro)
      clearInterval(anim)
})

$('text').on('mouseout', function() {
    if(!intro)
      startAnimation()
})
