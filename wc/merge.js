const fs = require('fs');
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
    let year_sum=0;
    for(let i=0;i<ret[ii][year].length;i++){
      year_sum+=ret[ii][year][i][Object.keys(ret[ii][year][i])[0]]
    }
    for(let i=0;i<ret[ii][year].length;i++){
     ret[ii][year][i][Object.keys(ret[ii][year][i])[0]]/=year_sum/100
     if(ret[ii][year][i][Object.keys(ret[ii][year][i])[0]]<=1)ret[ii][year][i][Object.keys(ret[ii][year][i])[0]]=1
    }
}
str='json={"data":['
for(let ii=0;ii<ret.length;ii++){
  let year = Object.keys(ret[ii])[0]
  str+='{"'+year+'":['
  for(let i=0;i<ret[ii][year].length;i++){
    str+='{"'+Object.keys(ret[ii][year][i])[0]+'":'
    str+=""+ret[ii][year][i][Object.keys(ret[ii][year][i])[0]]
    str+="}"
    if(i!=ret[ii][year].length-1)str+=','
  }
  str+="]}"
  if(ii!=ret.length-1)str+=","
}
str+="]}"

fs.writeFile("data.js", str, function(err) {
    if(err) {
        return console.log(err);
    }
});
