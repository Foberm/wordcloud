function httpGetAsync(theUrl, counter)
{
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            if(JSON.parse(xmlHttp.responseText)["query"]["pages"][Object.keys(JSON.parse(xmlHttp.responseText)["query"]["pages"])[0]]["extract"]){
              lang[counter].push(JSON.parse(xmlHttp.responseText)["query"]["pages"][Object.keys(JSON.parse(xmlHttp.responseText)["query"]["pages"])[0]]["extract"]);
    }}
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

let baseurl= "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&origin=*&titles="
for(var i=0;i<lang.length;i++){
  httpGetAsync(baseurl+lang[i][0], i)
}
