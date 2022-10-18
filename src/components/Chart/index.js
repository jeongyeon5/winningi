import styled from 'styled-components';
import MonthlyPost from './components/monthlyPost';
import MonthlyVisitors from './components/monthlyVisitors';
import UserAgeGroup from "./components/userAgeGroup";

const Chart = () => {
    return(<>
        <ChartWrap>
            <MonthlyVisitors />
            <UserAgeGroup />
            <MonthlyPost/>
        </ChartWrap>
    </>)
}

const ChartWrap = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-y: scroll;
    @media  (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`
export default Chart;