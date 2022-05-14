import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header_left">
        <div className="Header_left_title">오늘 감정</div>
      </div>

      <div className="Header_right">
        <div className="Header_right_button">감정담기</div>
        <div className="Header_right_button">지난감정</div>

        {/* 로그인상태일때 로그아웃 */}
        <div className="Header_right_button">로그인</div>
      </div>
    </div>
  );
};

export default Header;
