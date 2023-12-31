import React from "react";

const LocationIcon = ({ className }: { className: string }) => {
  return (
    <>
      <svg
        className={className}
        width="20"
        height="25"
        viewBox="0 0 20 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M8.97229 24.4956C1.40469 14.2105 0 13.1549 0 9.375C0 4.19731 4.47714 0 10 0C15.5229 0 20 4.19731 20 9.375C20 13.1549 18.5953 14.2105 11.0277 24.4956C10.5311 25.1682 9.46885 25.1681 8.97229 24.4956ZM10 13.2812C12.3012 13.2812 14.1667 11.5324 14.1667 9.375C14.1667 7.21763 12.3012 5.46875 10 5.46875C7.6988 5.46875 5.83333 7.21763 5.83333 9.375C5.83333 11.5324 7.6988 13.2812 10 13.2812Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default LocationIcon;
