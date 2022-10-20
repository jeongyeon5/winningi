import styled from 'styled-components';
import MonthlyPost from './components/monthlyPost';
import MonthlyVisitors from './components/monthlyVisitors';
import UserAgeGroup from './components/userAgeGroup';

const Chart = () => {
  return (
    <>
      <ChartWrap>
        <MonthlyVisitors />
        <UserAgeGroup />
        <MonthlyPost />
      </ChartWrap>
    </>
  );
};

const ChartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  padding: 50px 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;
export default Chart;
