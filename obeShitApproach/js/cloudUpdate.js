let b=""
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
    updateUI(b)
}
update(0)

function updateUI(d) {
  if(d !== ""){
      b=d
      let percent = 0
      let currentValues = json.data[animation_progress-1][Object.keys(json.data[animation_progress-1])[0]]
      console.log(currentValues)
      for(let i = 0; i < currentValues.length; i++){
          let str = Object.keys(currentValues[i])[0].replace('-', '')
          if(str ==  d.text){
            percent = parseInt(currentValues[i][Object.keys(currentValues[i])[0]])
          }
      }

      let title = ''
      for(let i = 1; i < d.text.length; i++){
        if(d.text.charAt(i) === d.text.charAt(i).toUpperCase())
          title = d.text.slice(0, i) + ' ' + d.text.slice(i)
      }
      $("#desc_title").html(title)
      $("#num_percent").html(percent)
      $("#num_total").html(numberWithCommas(percent*12,5))
      $('#lbl_actor, #lbl_politics, #lbl_musician, #lbl_idiot').css("display","none")

      for(let i = 0; i < lang.length; i++){
          if(lang[i][0].toUpperCase().replace(' ', '') == d.text.toUpperCase()){
            switch(lang[i][1]){
              case 'S': $('#lbl_actor').css('display', 'inline'); break;
              case 'P': $('#lbl_politics').css('display', 'inline'); break;
              case 'M': $('#lbl_musician').css('display', 'inline'); break;
              case 'M/I': $('#lbl_musician, #lbl_idiot').css('display', 'inline'); break;
            }
            $("#num_age").html(lang[i][2])
          }
      }
 }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
