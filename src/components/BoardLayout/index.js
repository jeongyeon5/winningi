import styled from 'styled-components';
import BoardList from "./components/boardList";

const BoardLayout = ({ boardData }) => {
    // console.log('boardData', boardData);
    return (<>
        <BoardTable>
            <colgroup>
                <col width="5%" />
                <col width="70%" />
                <col width="12%" />
                <col width="13%" />
            </colgroup>
            <thead>
                <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성시간</th>
                </tr>
            </thead>
            <tbody>
                <BoardList boardData={boardData} />
            </tbody>
        </BoardTable>
    </>)
}
const BoardTable = styled.table`
    width: 100%;
    thead {
        tr {
            background-color: #5ba7e1;
            color: #fff;
        }
        th {
            padding: 15px 0;
            font-size: 18px;
            font-weight: 500;
        }
    }
`
export default BoardLayout;