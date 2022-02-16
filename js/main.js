/** 
 * Skapa en knapp "Fetch data".
 * När man klickar på knappen, 
 * så skall texten från http://codexplained.se/lorem_text.php hämtas och visas på sidan.
 * Hämta texten med hjälp av AJAX, se kodgenomgången js-ajax-intro
 */

let fetchDiv = document.getElementById('fetchDiv');
let fetchBtn = document.createElement('button');
fetchBtn.innerHTML = 'Fetch data';
let fetchText = document.createElement('div');
fetchDiv.append(fetchBtn, fetchText);

fetchBtn.addEventListener('click', function () {
    fetchData('http://codexplained.se/lorem_text.php');
})

function fetchData(text) {
    fetch(text)
        .then(response => {

            return response.text();

        })
        .then(data => {
           
            fetchText.innerHTML = data;
            fetchText.style.border = '2px solid grey';
            fetchText.style.padding = '5px';
            fetchText.style.margin = '5px';

        })
        .catch(error => {
            errorMessage = 'Error 404: File not found...';
            fetchText.style.color = 'red';
            fetchText.style.fontSize = '20px';
            fetchText.style.margin = '5px';
            fetchText.innerHTML = errorMessage;
        })
}
