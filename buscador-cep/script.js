document.getElementById('cepForm').addEventListener('submit', e => {
    e.preventDefault();
    const cepForm = document.getElementById("cepForm");
    const cep = document.getElementById('cepInput').value;
    const resultDiv = document.getElementById('result');
    const newSearchButton = document.getElementById('newSearch');

    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then(response => {
            if (!response.ok) {
                cepForm.style.display = 'none';
                throw new Error('CEP inválido ou não encontrado');
            }
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
                <h3>Endereço:</h3>
                <p><strong>Logradouro:</strong> ${data.address}</p>
                <p><strong>Bairro:</strong> ${data.district}</p>
                <p><strong>Cidade:</strong> ${data.city}</p>
                <p><strong>Estado:</strong> ${data.state}</p>
            `;
            resultDiv.style.display = 'block';
            newSearchButton.style.display = 'block';
            cepForm.style.display = 'none';
        })
        .catch(error => {
            resultDiv.innerHTML = `<p id="error">${error.message}</p>`;
            resultDiv.style.display = 'block';
            newSearchButton.style.display = 'block';
        });
});

document.getElementById('newSearch').addEventListener('click', function() {
    document.getElementById('cepInput').value = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('newSearch').style.display = 'none';
    document.getElementById("cepForm").style.display = 'block';
});
