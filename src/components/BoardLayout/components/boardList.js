

const BoardList = ({ boardData }) => {
    return(<>
        {boardData &&
            boardData.map((board,idx)=> {
                return (
                    <tr key={idx}>
                        <td>{board.id}</td>
                        <td>{board.title}</td>
                        <td>{board.writer}</td>
                        <td>{board.data}</td>
                    </tr>
                )
            })
        }
</>)
}

export default BoardList;