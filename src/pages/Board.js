import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardLayout from '../components/BoardLayout';


const Board = () => {

    const [ boardData, setBoardData] = useState([]);

    useEffect(() => {
        fetch("/data/board.json")
        .then((res) => res.json())
            .then((data) => setBoardData(data.BoardData))
            // .then((data) => console.log(data.BoardData))
    }, []);
    return (
        <BoardWrap>
            <div className="boardInner">
                <div className="boarTitle">게시판</div>
                <BoardLayout boardData={boardData} />
            </div>
        </BoardWrap>
    );
};

const BoardWrap = styled.div`
    margin-left: 200px;
    .boardInner {
        margin: 50px 50px;
        .boarTitle {
            font-size: 40px;
            margin-bottom: 30px;
        }
    }
`
export default Board;  