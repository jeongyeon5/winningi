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
        <div className='detailInner'>{boardData[id].title}</div>
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
    }
  }
`;
export default BoardDetailTable;
