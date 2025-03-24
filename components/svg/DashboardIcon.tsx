import React from "react";
import Svg, { Path } from "react-native-svg";

interface DashboardIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({
  width = 27,
  height = 27,
  color = "white",
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
    <Path
      d="M6.28571 5.57143H10.1226C10.3171 5.37309 10.5689 5.2312 10.8512 5.17263C10.7176 2.29335 8.34091 0 5.42857 0C2.43045 0 0 2.43045 0 5.42857C0 8.33086 2.27755 10.7012 5.14286 10.8498V10V9.9912C2.75123 9.84377 0.857143 7.85737 0.857143 5.42857C0.857143 2.95163 2.82709 0.934806 5.28571 0.859331V4.57143C5.28571 5.12371 5.73343 5.57143 6.28571 5.57143ZM6.28571 4.71429C6.2068 4.71429 6.14286 4.65033 6.14286 4.57143V0.912617C8.0956 1.21902 9.63812 2.76157 9.94452 4.71429H6.28571ZM11.1429 5.71429C10.6695 5.71429 10.2857 6.09806 10.2857 6.57143V11.1429C10.2857 11.6162 10.6695 12 11.1429 12C11.6162 12 12 11.6162 12 11.1429V6.57143C12 6.09806 11.6162 5.71429 11.1429 5.71429ZM6.57143 9.14286C6.09806 9.14286 5.71429 9.52663 5.71429 10V11.1429C5.71429 11.6162 6.09806 12 6.57143 12C7.0448 12 7.42857 11.6162 7.42857 11.1429V10C7.42857 9.52663 7.0448 9.14286 6.57143 9.14286ZM8 8.28571C8 7.81234 8.38377 7.42857 8.85714 7.42857C9.33051 7.42857 9.71429 7.81234 9.71429 8.28571V11.1429C9.71429 11.6162 9.33051 12 8.85714 12C8.38377 12 8 11.6162 8 11.1429V8.28571Z"
      fill={color}
    />
  </Svg>
);

export default DashboardIcon;
