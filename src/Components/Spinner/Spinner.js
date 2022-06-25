import styled from "styled-components";
import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <Spin>
      <img src={loading} alt="loading" />
    </Spin>
  );
};
const Spin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6%;
  img {
    display: block;
    align-content: center;
    align-content: center;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export default Spinner;
