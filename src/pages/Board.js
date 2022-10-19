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
            게시판
            <BoardLayout boardData={boardData}/>
        </BoardWrap>
    );
};

const BoardWrap = styled.div`
    margin-left: 200px;
`
export default Board;  