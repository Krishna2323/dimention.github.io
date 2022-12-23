import React from "react";
import { SVG } from "../../model/svg";

const AtlassianSvg: React.FC<SVG> = (props) => {
  const { width, height, style } = props;

  return (
    <svg
      width={width ? width : "20"}
      height={height ? height : "20"}
      style={style ? style : {}}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33802 8.52749C5.06902 8.24012 4.64987 8.25641 4.46705 8.62206L0.0557221 17.4449C-0.0260588 17.6084 -0.0173483 17.8026 0.0787421 17.9581C0.174832 18.1136 0.344596 18.2082 0.527388 18.2082H6.67079C6.87188 18.2128 7.05682 18.0985 7.14256 17.9166C8.46723 15.1777 7.66467 11.0134 5.33802 8.52749Z"
        fill="url(#paint0_linear_1_1386)"
      />
      <path
        d="M8.57582 0.501288C6.10851 4.41045 6.27129 8.73994 7.89646 11.9904L10.8587 17.9149C10.9481 18.0936 11.1307 18.2064 11.3304 18.2064H17.4737C17.6565 18.2064 17.8263 18.1118 17.9224 17.9563C18.0184 17.8008 18.0272 17.6066 17.9454 17.4432C17.9454 17.4432 9.68075 0.911553 9.47286 0.497932C9.28698 0.127648 8.81482 0.122613 8.57582 0.501288Z"
        fill="#2681FF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_1386"
          x1="4.58038"
          y1="6.93259"
          x2="-1.60437"
          y2="13.5761"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0052CC" />
          <stop offset="0.923" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AtlassianSvg;
