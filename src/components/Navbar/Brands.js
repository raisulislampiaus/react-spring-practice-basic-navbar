import React from "react";
import styled from "styled-components";

import logo from "../../img/Stages-of-Branding.jpg";

const Brands = () => {
  return <Image src={logo} alt="Company Logo" />;
};

export default Brands;

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;