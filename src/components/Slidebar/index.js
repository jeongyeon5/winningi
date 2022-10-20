import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserAlt, FaClipboardList } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { CgLogOff, CgMenu, CgClose } from 'react-icons/cg';
import { useState } from 'react';

const Slidebar = () => {
  const [slide, setSlide] = useState(false);
  const handleSlide = () => {
    setSlide(!slide);
  };
  return (
    <>
      <SlideWrap>
        <CgMenu className='slideMenuIcon' size='30' onClick={handleSlide} />
        {slide && (
          <div className='slideInner' slide={!slide}>
            <CgClose size='30' className='closeBtn' onClick={() => setSlide(false)} />
            <div className='menuList'>
              <Link to={'/'} className='menu'>
                <FaUserAlt size='30' />
                User
              </Link>
              <div className='nav'>
                <Link to={'/board'} className='menu'>
                  <FaClipboardList size='30' /> 게시판
                </Link>
                <div className='menu'>
                  <AiTwotoneSetting size='30' /> 개인설정
                </div>
              </div>
              <div className='menu'>
                <CgLogOff size='30' />
                로그아웃
              </div>
            </div>
          </div>
        )}
      </SlideWrap>
    </>
  );
};
const SlideWrap = styled.div`
  position: relative;
  .slideMenuIcon {
    position: absolute;
    top: 30px;
    left: 30px;
    color: #3098e8;
  }
  .slideInner {
    transition: all 0.7s;
    background-color: #ddd;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    padding: 100px 20px;
    .closeBtn {
      position: absolute;
      top: 30px;
      left: 130px;
    }
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
`;

export default Slidebar;
