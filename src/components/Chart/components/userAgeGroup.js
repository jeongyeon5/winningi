import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const UserAgeGroup = () => {
    const data = {
        datasets: [{
            type: 'pie',
            data: [35, 29, 11, 10, 8, 7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(255, 205, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(153, 102, 255, 0.8)',
            ],
            hoverOffset: 4,
        }],
        dataIndex: [{
            label: 'ee',
        }]
    };
    const options = {
        responsive: true,
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
            title: {
                display: true,
                text: '사용자 연령대',
                font: {
                    size: 20,
                    lineHeight: 1,
                    weight: 400,
                },
            },
            tooltip: {
                backgroundColor: '#aaa',
                padding: 10,
                bodySpacing: 5,
            },
        },
    };
    return (<>
        <ChartWrap>
            <Pie type="pie" data={data} options={options} />
        </ChartWrap>

    </>)
}
const ChartWrap = styled.div`
    width: 20%;
    @media (max-width: 768px) {
        width: 100%;
    }
    .chartTitle {
        text-align: center;
        font-size: 20px;
        line-height: 20px;
    }
`
export default UserAgeGroup;