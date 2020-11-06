import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";

const Stats = () => {
  const { 
    numOfLikes, 
    numOfRetweets 
    } = useContext(TweetContext);

  return (
    <Wrapper>
      <Stat><p><StatNumber>{numOfRetweets}</StatNumber> Retweets</p></Stat>
      <Stat><p><StatNumber>{numOfLikes}</StatNumber> Likes</p></Stat>  
    </Wrapper>
  );
}

const Wrapper =  styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  color: rgb(101, 119, 134);
  margin-right: 30px;
`;

const StatNumber = styled.span`
  font-weight: bold;
  color: #000;
`;

export default Stats;