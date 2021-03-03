const baseUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const responseContainer = document.getElementById('apiResponseContainer');

function handleResponse(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw 'Oops, something went wrong with the API';
    }

}

function showError(message) {
    responseContainer.append(message);
}

function showResponse(parsedResponse) {
    Object.keys(parsedResponse.bpi).forEach(key => {
        let symbol = parsedResponse.bpi[key].symbol;
        let price = parsedResponse.bpi[key].rate;
        let symbolContainer = document.createElement('p');
        symbolContainer.innerHTML = symbol;
        let finalResponse = document.createElement('div');
        finalResponse.append('current price in: ', symbolContainer, price);
        responseContainer.appendChild(finalResponse);
    })
}

function sendrequest(url) {
    fetch(url, { method: 'GET' })
        .then(handleResponse)
        .then(showResponse)
        .catch(showError)
}

window.addEventListener('DOMContentLoaded', function() {
    sendrequest(baseUrl);
})