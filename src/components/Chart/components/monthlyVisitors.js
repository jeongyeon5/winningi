import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);


const MonthlyVisitors = () => {
    const data = {
        labels: ['4월', '5월', '6월', '7월'],
        datasets: [
            {
                type: 'line',
                label: '월별 방문자 추이',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 3,
                backgroundColor: 'rgb(54, 162, 235)',
                data: [18, 27, 50, 30],
            }
        ],
    };
    const options = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    padding: 10,
                    font: {
                        size: 20,
                        lineHeight: 1,
                    },
                }
            },
            tooltip: {
                backgroundColor: '#aaa',
                padding: 10,
                bodySpacing: 5,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                axis: 'x',
                position: 'bottom',
                ticks: {
                    padding: 5,
                },
            },
            y: {
                type: 'linear',
                grid: {
                    color: '#333',
                },
                min: 0,
                max: 60,
                ticks: {
                    stepSize: 15
                },
                axis: 'y',
                display: true,
                position: 'left',
            },
        }
    };
    return(
        <ChartWrap>
            <Line type="line" data={data} options={options} />
        </ChartWrap>
    )
}

const ChartWrap = styled.div`
    width: 30%;
    @media  (max-width: 768px) {
        width: 100%;
    }

`
export default MonthlyVisitors;