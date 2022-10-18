import { Link } from "react-router-dom";
import styled from "styled-components"; 
import { FaUserAlt, FaClipboardList } from "react-icons/fa"; 
import { AiTwotoneSetting } from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";

const Slidebar = () => {
    return (
        <>
            <SlideWrap >
                 <div className="slideInner">
                    <div className="menuList">
                        <Link to={"/"} className="menu"><FaUserAlt size="30" />User</Link>
                        <div className="nav">
                            <Link to={"/board"} className="menu"><FaClipboardList size="30" /> 게시판</Link>
                            <div className="menu"><AiTwotoneSetting size="30" /> 개인설정</div>
                        </div>
                        <div className="menu"><CgLogOff size="30" />로그아웃</div>
                    </div>
                </div>
            </SlideWrap>
        </>
    );
};
const SlideWrap = styled.div`
    position: relative;
    .slideInner {
        background-color: #ddd;
        position: fixed;
        top:0;
        left:0;
        width: 200px;
        height: 100%;
        padding: 100px 20px;
        .menuList {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            .nav {
                display: flex;
                flex-direction: column;
                .menu:first-child {
                    margin-bottom: 50px;
                }
            }
            .menu {
                display: flex;
                align-items: center;
                font-size: 20px;
                svg {
                    margin-right: 20px;
                }
            }
        }
    }
`

export default Slidebar;