let marketcap = 438569;

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=pandora-protocol&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    document.getElementById("pandora-finance").innerHTML = marketcap/response["pandora-protocol"].usd;
});