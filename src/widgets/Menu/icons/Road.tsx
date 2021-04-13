import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g>
        <path d="M18.523 11.172H5.477c-1.79 0-3.25-1.461-3.25-3.25 0-1.793 1.46-3.25 3.25-3.25h8.156a.829.829 0 000-1.656H5.477A4.912 4.912 0 00.57 7.922a4.915 4.915 0 004.907 4.906h13.046c1.79 0 3.25 1.457 3.25 3.25s-1.46 3.25-3.25 3.25h-8.226a.829.829 0 000 1.656h8.226c2.704 0 4.907-2.199 4.907-4.906a4.915 4.915 0 00-4.907-4.906zm0 0"></path>
        <path d="M5.36 14.363a3.494 3.494 0 00-3.489 3.489c0 2.968 2.785 5.789 2.902 5.906a.828.828 0 001.172 0c.121-.117 2.903-2.938 2.903-5.906a3.492 3.492 0 00-3.489-3.489zm0 7.555c-.715-.883-1.829-2.512-1.829-4.066a1.83 1.83 0 013.66 0c0 1.554-1.113 3.183-1.832 4.066zm0 0M18.57 9.637c.211 0 .422-.082.586-.242.117-.122 2.903-2.938 2.903-5.907A3.494 3.494 0 0018.57 0a3.492 3.492 0 00-3.488 3.488c0 2.969 2.781 5.785 2.902 5.907.16.16.371.242.586.242zm0-7.98c1.008 0 1.832.823 1.832 1.831 0 1.555-1.117 3.18-1.832 4.067-.718-.887-1.832-2.512-1.832-4.067 0-1.008.82-1.832 1.832-1.832zm0 0"></path>
      </g>
    </Svg>
  );
};

export default Icon;
