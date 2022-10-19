import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const BoardDetailTable = () => {
  const [boardData, setBoardData] = useState();
  const { id } = useParams();
  console.log(boardData);

  useEffect(() => {
    fetch('/data/board.json')
      .then(res => res.json())
      .then(data => setBoardData(data.BoardData));
  }, []);

  return (
    boardData && (
      <Wrap>
        <div className='detailInner'>
          <div className='detailTitle'>{boardData[id - 1].title}</div>
          <div className='detailDate'>{boardData[id - 1].data}</div>
          <div className='detailContent'>{boardData[id - 1].detail.content}</div>
        </div>
      </Wrap>
    )
  );
};
const Wrap = styled.div`
  margin-left: 200px;
  .detailInner {
    margin: 50px;
    .detailTitle {
      font-size: 40px;
      margin-bottom: 30px;
    }
    .detailDate {
      margin-bottom: 10px;
    }
    .detailContent {
      border: 1px solid #555;
      background-color: #f5f5f5;
      height: 500px;
      padding: 20px;
    }
  }
`;
export default BoardDetailTable;
