var url = "https://github.com/b-mcavoy/datasets/blob/main/Culture%20%26%20Entertainment/Most%20Followed%20Instagram%20Accounts.csv"
var celebrityName = getColumn(url,3)
var followers = getColumn(url,4)
var userName = getColumn(url,2)

function getInfo(nameofCeleb){
var information = []   
for(var i = 0; i < information.length; i++){
if(celebrityName.toLowerCase().includes(nameofCeleb)){
 information.push(followers)   
}

}
}
console.log(getInfo("Cristiano Ronaldo"))









