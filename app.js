var baseUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
var apikey = "e1026657-301b-4947-9e98-e8982a94dbeb"


fetch(baseUrl, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'X-CMC_PRO_API_KEY': apikey,
    }
}).then(response => response.json())
.then(obj => {
    console.log(obj.data)

    let coinsData = obj.data;

    if(coinsData.length > 0) {
        var cryptoCoins = ""
    }

    // Print an integer with commas as thousands separators
    function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

    //For Loop Starts
    coinsData.forEach(coin => {

        cryptoCoins += "<tr>"
        cryptoCoins += `<td> ${coin.cmc_rank} </td>`;
        cryptoCoins += `<td> ${coin.name} </td>`;
        cryptoCoins += `<td> ${coin.symbol} </td>`;
        cryptoCoins += `<td> $${thousands_separators(Math.round(coin.quote.USD.price))} </td>`;
        cryptoCoins += `<td> $${thousands_separators(Math.round(coin.quote.USD.market_cap))} </td>`;
        cryptoCoins += `<td> ${Math.round(coin.quote.USD.percent_change_30d)} </td>`;
        cryptoCoins += `<td> ${coin.last_updated} </td>`;
    });

    document.getElementById("data").innerHTML = cryptoCoins;

}).catch((error) => {
    console.log(error)
})
