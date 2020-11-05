import React, { useContext } from "react";
import styled from "styled-components";

import Tweet from "./Tweet";
import { TweetContext } from "./Tweet/TweetContext";

const App = () => {

  return (
    <Wrapper>
      <Tweet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
