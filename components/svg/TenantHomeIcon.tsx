import React from "react";
import Svg, { Path } from "react-native-svg";

interface TenantHomeIconProps {
  width?: number;
  height?: number;
  color?: string; // Added color prop
}

const TenantHomeIcon: React.FC<TenantHomeIconProps> = ({
  width = 24,
  height = 24,
  color = "white",
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 13" fill="none">
    <Path
      d="M4.79784 6.19136C6.45452 6.19136 7.79799 4.80511 7.79799 3.09568C7.79799 1.38625 6.45452 0 4.79784 0C3.14116 0 1.79769 1.38625 1.79769 3.09568C1.79769 4.80511 3.14116 6.19136 4.79784 6.19136ZM4.79784 0.929323C5.9577 0.929323 6.89795 1.89951 6.89795 3.0963C6.89795 4.29309 5.9577 5.26328 4.79784 5.26328C3.63798 5.26328 2.69773 4.29309 2.69773 3.0963C2.69773 1.89951 3.63798 0.929323 4.79784 0.929323ZM1.34947 8.35586H6.82414L7.88319 7.42716H1.34947C0.60423 7.42716 0 8.05063 0 8.8196V9.17746C0 9.73034 0.19141 10.2647 0.538827 10.6851C1.47847 11.8205 2.91015 12.3809 4.79784 12.3809C5.22266 12.3809 5.62168 12.348 6.0003 12.2911V11.3537C5.63068 11.4175 5.23166 11.4522 4.79784 11.4522C3.15496 11.4522 1.9753 10.9903 1.22286 10.0814C1.01405 9.82941 0.899445 9.50869 0.899445 9.17684V8.81898C0.899445 8.56265 1.10046 8.35524 1.34887 8.35524L1.34947 8.35586ZM8.86304 7.38011C9.11506 7.15907 9.48527 7.15907 9.73729 7.38011L11.7624 9.15641C11.913 9.2889 12 9.48269 12 9.68701V12.4644C12 12.7604 11.7678 13 11.481 13H10.7195C10.4327 13 10.2005 12.7604 10.2005 12.4644V10.9525C10.2005 10.7166 10.0157 10.5247 9.78709 10.5241H8.81444C8.58583 10.5253 8.40102 10.7166 8.40102 10.9525V12.4644C8.40102 12.7604 8.16881 13 7.88199 13H7.12056C6.83374 13 6.60153 12.7604 6.60153 12.4644V9.68701C6.60153 9.48269 6.68853 9.2889 6.83914 9.15641L8.86424 7.38011H8.86304Z"
      fill={color} // Updated fill to use color prop
    />
  </Svg>
);

export default TenantHomeIcon;
