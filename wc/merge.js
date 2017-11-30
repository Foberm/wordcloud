let k= 3;
let data=[]
for(let i=1;i<=k;i++){
  let temp = require('./data'+i+".js");
  data.push(temp.json)
}
let factor=[]
for(let i=0;i<data.length;i++){
    factor.push(data[i].data[0][" 2004"][0].Java/data[0].data[0][" 2004"][0].Java)
}
let ret=data[0].data
    for(let ii=0;ii<data[0].data.length;ii++){
      let year = Object.keys(ret[ii])[0]
      for(let i=1;i<data.length;i++){
        for(let j=1; j<data[i].data[ii][year].length;j++){
            data[i].data[ii][year][j][Object.keys(data[i].data[ii][year][j])[0]]/=factor[i]
            ret[ii][year].push(data[i].data[ii][year][j])

        }
    }
console.log(ret[ii][year])
}
