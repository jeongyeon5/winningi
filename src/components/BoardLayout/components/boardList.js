import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BoardList = ({ boardData }) => {
  const navigate = useNavigate();
  return (
    <>
      {boardData &&
        boardData.map((board, idx) => {
          return (
            <BoardColumn key={idx} onClick={() => navigate(`/board/${board.id}`)}>
              <td align='center'>{board.id}</td>
              <td>{board.title}</td>
              <td align='center'>{board.writer}</td>
              <td align='center'>{board.data}</td>
            </BoardColumn>
          );
        })}
    </>
  );
};
const BoardColumn = styled.tr`
  border-bottom: 1px solid #ddd;
  &:hover {
    cursor: pointer;
    background-color: #b5d8f2;
  }
  td {
    padding: 20px 0;
  }
`;
export default BoardList;
