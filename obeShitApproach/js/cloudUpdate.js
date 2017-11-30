function update(pos){
    let cont = json.data[pos][Object.keys(json.data[pos])[0]]
    let ina= ""

    for(let i = 0; i < cont.length; i++){
        let str = Object.keys(cont[i])[0]
        let nr = parseInt(cont[i][Object.keys(cont[i])[0]])
        for(let j = 0; j < nr; j++){
          ina += str + " "
        }
    }
    parseText(ina)
}
update(0)

function updateUI(d) {
  let percent = 0
  let currentValues = json.data[animation_progress-1][Object.keys(json.data[animation_progress-1])[0]]
  for(let i = 0; i < currentValues.length; i++){
      let str = Object.keys(currentValues[i])[0]
      if(str ==  d.text)
        percent = parseInt(currentValues[i][Object.keys(currentValues[i])[0]])
  }
  $("#desc_title").html(d.text)
  $("#num_percent").html(percent)
  $("#num_total").html(numberWithCommas((5000000*percent/100)))

  $('#lbl_back, #lbl_front').css("display","none")

  for(let i = 0; i < lang.length; i++){
      if(lang[i][0].toUpperCase() == d.text.toUpperCase()){
        switch(lang[i][2]){
          case 'B': $('#lbl_back').css('display', 'inline'); break;
          case 'F': $('#lbl_front').css('display', 'inline'); break;
          case 'B/F': $('#lbl_back, #lbl_front').css('display', 'inline'); break;
        }
        // $('#lang_desc').html(lang[i][1])
      }
  }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
