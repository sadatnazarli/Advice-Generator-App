document.getElementById('get-advice').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('advice-text').innerText = `"${data.slip.advice}"`;
            document.getElementById('advice-id').innerText = data.slip.id;
        });
});
