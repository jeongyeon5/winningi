import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const MonthlyPost = () => {
  const data = {
    labels: ['4월', '5월', '6월', '7월'],
    datasets: [
      {
        type: 'bar',
        label: '월별 게시글 등록수',
        backgroundColor: ['rgba(255, 99, 132)', 'rgba(255, 159, 64)', 'rgba(255, 205, 86)', 'rgba(75, 192, 192)'],
        borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
        borderWidth: 1,
        data: [18, 29, 56, 90],
      },
    ],
  };
  const options = {
    plugins: {
      element: {
        bar: {
          pointStyle: 'circle',
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 10,
          font: {
            size: 20,
            lineHeight: 1,
          },
        },
      },
      tooltip: {
        backgroundColor: '#68b7f8',
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
          color: '#ddd',
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
        axis: 'y',
        display: true,
        position: 'left',
      },
    },
  };
  return (
    <ChartWrap>
      <Bar type='bar' data={data} options={options} />
    </ChartWrap>
  );
};
const ChartWrap = styled.div`
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default MonthlyPost;
