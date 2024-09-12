// Configuração inicial do gráfico
const ctx = document.getElementById('myChart').getContext('2d');

// Função para gerar cores em tons pastéis
function getRandomPastelColor() {
    const r = Math.round((Math.random() * 127) + 127);
    const g = Math.round((Math.random() * 127) + 127);
    const b = Math.round((Math.random() * 127) + 127);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
}

// Gerando cores dinâmicas
const dynamicColors = Array.from({ length: 2 }, () => getRandomPastelColor());

// Criação do gráfico de linhas
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Vendas em 2024',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: dynamicColors[0],
            borderColor: dynamicColors[1],
            borderWidth: 3,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#333',
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});

// Função para atualizar o gráfico a cada 2 segundos
setInterval(() => {
    const newData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20));
    myChart.data.datasets[0].data = newData;
    myChart.update();
}, 2000);
