
const egg_strings = [
  'Oh really? Go to the casino then..',
  'Good for you!',
  'Maybe you should play the lottery..',
  'Luck is great, but most of life is hard work.',
  'The answer is 42.',
  'Nice!',
  "console.log( 'i am feeling lucky' );",
  "cout << 'i am feeling lucky'",
  'Error 404: Luck not found',
  '01101100 01110101 01100011 01101011',
  "life.push( 'Luck' )",
  'if ( luck === null ) { getLucky( ); }'
]

let pauseDel = 700
let pauseWrite = 200

$('#query').typeIt({
  speed: 80,
  lifeLike: true,
  autoStart: true,
  callback: finishedTyping
  })
  .tiType('JavaScript')
  .tiPause(pauseDel)
  .tiDelete(10)
  .tiPause(pauseWrite)
  .tiType('Python')
  .tiPause(pauseDel)
  .tiDelete(6)
  .tiPause(pauseWrite)
  .tiType('C++')
  .tiPause(pauseDel)
  .tiDelete(3)
  .tiPause(pauseWrite)
  .tiType('Java')
  .tiPause(pauseDel)
  .tiDelete(4)
  .tiPause(pauseWrite)
  .tiSettings({speed: 60})
  .tiType('Find out which programming language was bing-ed th')
  .tiPause(300)
  .tiDelete(10)
  .tiPause(100)
  .tiType('googled the most!')

function finishedTyping(){
  $('#search').prop("disabled", false);
  $('#lucky').prop("disabled", false);
}

function easteregg() {
  let rand = Math.floor(Math.random() * egg_strings.length)
  let sentence = egg_strings[rand]
  $('#query').addClass('marked')
  setTimeout(function(){
      $('#query').removeClass('marked')
      $('#query').typeIt({
        speed: 40,
        lifeLike: true,
        autoStart: true,
        startDelete: true
      })
      .tiType(sentence)
  }, 300)
}
