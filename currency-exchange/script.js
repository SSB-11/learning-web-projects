const container = document.getElementById("visualization");
const form = document.getElementById("form");

let items = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectCurrency = document.getElementById("selectCurrency");
    const qtd_dias = 10;
    const currency = selectCurrency.value;
    fetch(`https://economia.awesomeapi.com.br/json/daily/${currency}/${qtd_dias}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} => Cheque se as informações são válidas.`);
            }
            return response.json();
        })
        .then(data => {
            container.innerHTML = "";
            let items = [];
            let date;
            for (let i = 0; i < qtd_dias; i++) {
                let item = data[i];
                // Timestamp multiplied by 1000 so that the argument is in milliseconds, not seconds
                date = new Date(item.timestamp * 1000).toISOString().split('T')[0];
                items.push({
                    x: date,
                    y: parseFloat(item.high)
                });
            }
            return items;
        })
        .then(items => {
            const dataset = new vis.DataSet(items);
            let startDate = items[items.length - 1].x;
            let endDate = items[0].x;
            const options = {
                start: addDays(startDate, -1),
                end: addDays(endDate, 1),
                showCurrentTime: false
            };
            const graph2d = new vis.Graph2d(container, dataset, options);
        })
        .catch(error => {
            container.textContent = error;
        })
});

function extractDate(datetime) {
    return datetime.toISOString().split('T')[0];
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return extractDate(result);
}   
