const request = require ('request')
const cheerio = require ('cheerio')


console.log('Before')

request('https://www.worldometers.info/coronavirus/' ,cb)
function cb (error, response, html){
    if(error){
        console.error(error);
    }
    else{
        handleHtml(html);
    }
}


function handleHtml(html){
    let selector = cheerio.load(html)
    let contentArr = selector( '.maincounter-number span')


    // multiple same classes ko broser as an array store krta hai that's why hum conent me array ki properties ka use kr skte hai




    let totalCases = selector(contentArr[0]).text() //.text cheerio ka funtion hai jo data ko simple text me convert krta hai
    console.log('Total Cases : ' + totalCases)
    
    let totalDeaths = selector(contentArr[1]).text()
    console.log('Total Deaths : ' + totalDeaths)
    
    let Recovery = selector(contentArr[2]).text()
    console.log('Recovery : ' + Recovery)
}


