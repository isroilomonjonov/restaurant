import React from "react";
import "./style.css";

export const SeeMore = () => {
  return (
    <div className="box">
      <div className="see-more-wrapper">
        <div className="see-more">
          <div className="overlap-group">
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/75581cf83eabff6637dba9894a6a00aa/img/line-1.svg"
            />
            <div className="ellipse" />
            <img
              className="curousel"
              alt="Curousel"
              src="https://generation-sessions.s3.amazonaws.com/75581cf83eabff6637dba9894a6a00aa/img/curousel@2x.png"
            />
          </div>
          <div className="text-wrapper">See More</div>
        </div>
      </div>
    </div>
  );
};
