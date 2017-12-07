const googleTrends = require('google-trends-api');
const fs = require('fs');
let k=0;
let lang = [
  ['Michael Jackson', 'M', 'verstorben'],
  ['Justin Bieber', 'M', '23'],
  ['George Clooney', 'S', '56'],
  ['Dwayne Johnson', 'S', '45'],
  ['Harrison Ford', 'S', '75'],
  ['Tom Hanks', 'S', '61'],
  ['Scarlett Johansson', 'S', '33'],
  ['Angelina Jolie', 'S', '42'],
  ['Jennifer Aniston', 'S', '48'],
  ['Jennifer Lawrence', 'S', '27'],
  ['Tom Cruise', 'S', '55'],
  ['Brad Pitt', 'S', '53'],
  ['Nicholas Cage', 'S', '53'],
  ['Will Smith', 'S', '49'],
  ['Barack Obama', 'P', '56'],
  ['Donald Trump', 'P', '71'],
  ['Alexander van der Bellen', 'P', '73'],
  ['Sebastian Kurz', 'P', '31'],
  ['Angela Merkel', 'P', '63'],
  ['Elton John', 'M', '70'],
  ['David Guetta', 'M', '50'],
  ['Ed Sheeran', 'M', '26'],
  ['Taylor Swift', 'M', '27'],
  ['Angus Young', 'M', '62'],
  ['Brian Johnson', 'M', '70'],
  ['Phil Collins', 'M', '66'],
  ['Shawn Mendes', 'M', '19'],
  ['Selena Gomez', 'M', '25'],
  ['Ariana Grande', 'M', '24'],
  ['Harry Styles', 'M', '23'],
  ['Bruno Mars', 'M', '32']
]
let values=[]
for(let i=0;i<lang.length;i++){
  values.push(lang[i][0])
}
function abc(value){
googleTrends.interestOverTime({keyword: value, category:5,  endTime: new Date('2016-12-31')})
.then(function(results){
    const a =JSON.parse(results).default.timelineData
    let ret='exports.json={"data":['
    for(let i = 0;i<a.length;i++){
      let str=""+a[i].formattedTime.substring(a[i].formattedTime.indexOf(" "))
      ret+='{"'+str+'":'+'['
      let sum=[0,0,0,0,0]
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
        ret+='{"'+value[ii]+'":'+sum[ii]+'}'
        if(ii<value.length-1)ret+=','
      }
      ret+=']}'
      if(i<a.length-1)ret+=","
    }
    ret+="]}"
    k++;
    fs.writeFile("data"+k+".js", ret, function(err) {
        if(err) {
            return console.log(err);
        }
    });
})

.catch(function(err){
  console.error('Oh no there was an error', err);
});
}
for( let i=1;i<=values.length;i++){
 abc(values.slice(0, 1).concat(values.slice(i, i+4>=values.length?values.length:i+4)))
  i+=3;
}
