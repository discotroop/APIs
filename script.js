console.log("test")


let London = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b6ae9a30045c14a9e52d97b04cc869d9'

// use fetch

fetch(London, {mode: 'cors'})
    .then(function(response) {
        console.log("got em")
    }) 

    .catch(function(err) {
        console.log("whoopsie")
    });

// giphy example

let gifKey = 'sWFCiwUq7x829RbfAm6T64mM69y8cJ5C'