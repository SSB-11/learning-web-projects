document.getElementById('cepForm').addEventListener('submit', e => {
    e.preventDefault();
    const cepForm = document.getElementById("cepForm");
    const cepInput = document.getElementById('cepInput');
    const cep = cepInput.value;
    const resultDiv = document.getElementById('result');
    const newSearchButton = document.getElementById('newSearch');
    const errorMessage = document.getElementById("errorMessage");

    if (!cep) {
        errorMessage.textContent = 'Favor informar um CEP';
        return;
    }

    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    if (!cepRegex.test(cep)) {
        errorMessage.textContent = 'CEP inválido. Utilize o formato 00000-000.';
        cepInput.value = '';
        return;
    }

    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then(response => {
            if (!response.ok) {
                cepForm.style.display = 'none';
                throw new Error(`CEP ${cep} inválido ou não encontrado.`);
            }
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
                <table class="table table-bordered">
                <caption>Acesse a API CEP <a href="https://docs.awesomeapi.com.br/api-cep" target="_blank">neste link</a>.</caption>
                    <tbody>
                        <tr>
                            <th scope="row">CEP</th>
                            <td>${cep}</td>
                        </tr>
                        <tr>
                            <th scope="row">Logradouro</th>
                            <td>${data.address}</td>
                        </tr>
                        <tr>
                            <th scope="row">Bairro</th>
                            <td>${data.district}</td>
                        </tr>
                        <tr>
                            <th scope="row">Cidade</th>
                            <td>${data.city}</td>
                        </tr>
                        <tr>
                            <th scope="row">Estado</th>
                            <td>${data.state}</td>
                        </tr>
                    </tbody>
                </table>
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

document.getElementById('newSearch').addEventListener('click', function () {
    document.getElementById('cepInput').value = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('newSearch').style.display = 'none';
    document.getElementById("cepForm").style.display = 'block';
    document.getElementById("errorMessage").textContent = '';
});
