let ws = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade")
let stockPriceElement = document.getElementById("stock-price")
let lastPrice = null;

ws.onmessage = (event) => {
    console.log(event.srcElement.url)
    // if ((event.srcElement.url).includes("eth")) {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p * 75).toFixed(2)
    stockPriceElement.innerText = parseFloat(stockObject.p * 75).toFixed(2);

    stockPriceElement.style.color = !lastPrice || lastPrice === price ? "black" : price > lastPrice ? "green" : "red";

    lastPrice = price;
    console.log(stockObject.p);

    // }

    // else {
    //     stockPriceElement.innerText = "BTC";

    // }

}

ws = new WebSocket("wss://stream.binance.com:9443/ws/dotusdt@trade")
let btcPriceElement = document.getElementById("btc-price")


ws.onmessage = (event) => {
    console.log(event.srcElement.url)
    // if ((event.srcElement.url).includes("eth")) {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p * 75).toFixed(2)
    btcPriceElement.innerText = parseFloat(stockObject.p * 75).toFixed(2);

    btcPriceElement.style.color = !lastPrice || lastPrice === price ? "black" : price > lastPrice ? "green" : "red";

    lastPrice = price;
    console.log(stockObject.p);

    // }

    // else {
    //     stockPriceElement.innerText = "BTC";

    // }

}


