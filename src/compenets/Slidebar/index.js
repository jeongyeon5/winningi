import { Link } from "react-router-dom";

const Slidebar = () => {
    return (
        <>
            <div style={{ border: "1px solid #000" }}>
                Slidebar
                <div>
                    <Link to={"/"}>메인</Link>
                    <Link to={"/board"}>보드</Link>
                </div>
            </div>
        </>
    );
};
export default Slidebar;