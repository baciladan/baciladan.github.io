const baseUrl = 'http://numbersapi.com/8/22/date';
const responseContainer = document.getElementById('apiResponseContainer');

function handleResponse(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.text();
    } else {
        return 'Oops, something went wrong with the API';
    }

}

function showResponse(parsedResponse) {
    responseContainer.append(parsedResponse);
}

function sendrequest(url) {
    console.log('Fetch made!');
    fetch(url, { method: 'GET' })
        .then(handleResponse)
        .then(showResponse)
}

window.addEventListener('DOMContentLoaded', function() {
    sendrequest(baseUrl);
})