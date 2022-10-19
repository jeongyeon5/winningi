import styled from 'styled-components';
import BoardList from "./components/boardList";

const BoardLayout = ({ boardData }) => {
    // console.log('boardData', boardData);
    return (<>
     
        <BoardTable>
            <colgroup>
                <col width="10%" />
                <col width="70%" />
                <col width="10%" />
                <col width="10%" />


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
	border: 1px solid #444;
	border-collapse: collapse;
    thead {
        tr {
            background-color: #ddd;
        }
    }
    tr {
        cursor: pointer;
        th, td {
            border: 1px solid #444;
			padding: 10px;
			font-size: 14px;
        }
    }
`
export default BoardLayout;