function update(pos){
    let cont = json.data[pos][Object.keys(json.data[pos])[0]]
    let ina=""

    for(let i = 0; i < cont.length; i++){
        let str = Object.keys(cont[i])[0]
        let nr = parseInt(cont[i][Object.keys(cont[i])[0]])
        for(let j = 0; j < nr; j++){
          ina += str + " "
        }
    }

    document.getElementById("text").innerHTML = ina
}
update(0)
// let nr=1;
// function next(){
// setTimeout(function(){
//   update(nr)
//   nr++
//   document.getElementById('go').click();
//   next()
// }, 1000)
// }
// next()

function updateUI(d) {
  $("#desc_title").html(d.text)
  $("#num_percent").html(d.size)
  $("#num_total").html(numberWithCommas((5000000*d.size/100)))
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
