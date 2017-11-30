const googleTrends = require('google-trends-api');
const fs = require('fs');

value=['Java', 'Javascript', 'C', 'go', 'php']//max len = 5
googleTrends.interestOverTime({keyword: value, category:5,  endTime: new Date('2016-12-31')})
.then(function(results){
    const a =JSON.parse(results).default.timelineData
    console.log(a.length)
    let ret='{"data":['
    for(let i = 0;i<a.length;i++){
      let str=""+a[i].formattedTime.substring(a[i].formattedTime.indexOf(" "))
      ret+='{"'+str+'":'+'['
      let sum=[0,0,0,0,0]
          console.log(i)
      for(let j=0;j<11;j++){
        for(let ii=0;ii<value.length;ii++){
          sum[ii]+=a[i].value[ii]
        }
        i++;
      }
      for(let ii=0;ii<value.length;ii++){
        sum[ii]=Math.round(sum[ii]/12)
      }
      for(let ii=0;ii<value.length;ii++){
        ret+='{"'+value[ii]+'":"'+sum[ii]+'"}'
        if(ii<value.length-1)ret+=','
      }
      ret+=']}'
      if(i<a.length-1)ret+=","
    }
    ret+="]}"

    fs.writeFile("data.json", ret, function(err) {
        if(err) {
            return console.log(err);
        }
    });
})
.catch(function(err){
  console.error('Oh no there was an error', err);
});
