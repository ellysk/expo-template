import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}
interface LogoProps extends IconProps {
  background?: "black" | "white" | "primary";
}

const Logo: React.FC<LogoProps> = ({
  width = 100,
  height = 100,
  background = "black",
}) => {
  const backgroundColor =
    background === "black"
      ? "#121212"
      : background === "white"
      ? "#FFFFFF"
      : "#274D99"; // primary color

  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
      <Rect width="100" height="100" fill={backgroundColor} />
      <Path
        d="M31 15H19C16.7909 15 15 16.7909 15 19V31C15 33.2091 16.7909 35 19 35H31C33.2091 35 35 33.2091 35 31V19C35 16.7909 33.2091 15 31 15Z"
        stroke="#3366CC"
        strokeWidth="5"
      />
      <Path
        d="M56 15H44C41.7909 15 40 16.7909 40 19V31C40 33.2091 41.7909 35 44 35H56C58.2091 35 60 33.2091 60 31V19C60 16.7909 58.2091 15 56 15Z"
        stroke="#009688"
        strokeWidth="5"
      />
      <Path
        d="M81 15H69C66.7909 15 65 16.7909 65 19V31C65 33.2091 66.7909 35 69 35H81C83.2091 35 85 33.2091 85 31V19C85 16.7909 83.2091 15 81 15Z"
        stroke="#FF9800"
        strokeWidth="5"
      />
      <Path
        d="M31 40H19C16.7909 40 15 41.7909 15 44V56C15 58.2091 16.7909 60 19 60H31C33.2091 60 35 58.2091 35 56V44C35 41.7909 33.2091 40 31 40Z"
        stroke="#009688"
        strokeWidth="5"
      />
      <Path
        d="M56 40H44C41.7909 40 40 41.7909 40 44V56C40 58.2091 41.7909 60 44 60H56C58.2091 60 60 58.2091 60 56V44C60 41.7909 58.2091 40 56 40Z"
        stroke="#3366CC"
        strokeWidth="5"
      />
      <Path
        d="M31 65H19C16.7909 65 15 66.7909 15 69V81C15 83.2091 16.7909 85 19 85H31C33.2091 85 35 83.2091 35 81V69C35 66.7909 33.2091 65 31 65Z"
        stroke="#FF9800"
        strokeWidth="5"
      />
    </Svg>
  );
};

export default Logo;

export { Logo, IconProps, LogoProps };
