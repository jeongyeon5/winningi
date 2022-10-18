import styled from 'styled-components';
import Chart from '../components/Chart';
const Main = () => {
    return (
        <MainWrap>
            <Chart />
        </MainWrap>
    );
};

const MainWrap = styled.div`
    margin-left: 200px;
`
export default Main;