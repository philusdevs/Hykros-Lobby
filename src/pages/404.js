import React from "react";
import Layout from "../components/layout";
import { Ghost } from "react-kawaii";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Layout title="404 Not Found">
      <NotFoundPageWrapper>
        <img
          src="https://telegra.ph/file/58dd891b0bd4b06651a20.png"
          alt="404"
        />
        <h1>OOPS..</h1>
        <p>404. Page not found</p>
      </NotFoundPageWrapper>
    </Layout>
  );
};

export default NotFoundPage;

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
