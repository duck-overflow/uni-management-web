function submitForm() {
    var text = document.getElementById("myText").value;

    // Formulardaten an den Server senden
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = "Antwort vom Server: " + data.message;
    })
    .catch(error => console.error('Fehler:', error));
}
