/** 
 * Skapa en knapp "Fetch data".
 * När man klickar på knappen, 
 * så skall texten från http://codexplained.se/lorem_text.php hämtas och visas på sidan.
 * Hämta texten med hjälp av AJAX, se kodgenomgången js-ajax-intro
 */
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    fetchData('http://codexplained.se/lorem_text.php');
})

function fetchData(text) {
    fetch(text)
        .then(response => {

            return response.text();

        })
        .then(data => {
            let dataDiv = document.getElementById('text');
            dataDiv.innerHTML = data;
            dataDiv.style.border = '2px solid grey';
            dataDiv.style.padding = '5px';
            dataDiv.style.margin = '5px';

        })
        .catch(error => {
            errorMessage = 'File not found...';
            let errorDiv = document.getElementById('text');
            errorDiv.style.color = 'red';
            errorDiv.style.fontSize = '20px';
            errorDiv.style.margin = '5px';
            errorDiv.innerHTML = errorMessage;
        })
}
