import styled from 'styled-components';
import BoardLayout from '../components/BoardLayout';


const Board = () => {
    return (
        <BoardWrap>
            게시판
            <BoardLayout />
        </BoardWrap>
    );
};

const BoardWrap = styled.div`
    margin-left: 200px;
`
export default Board;