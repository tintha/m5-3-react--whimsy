import React from 'react';
import moment from 'moment';
import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({children}) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  const isRetweetedByCurrentUser = false;
  const isLikedByCurrentUser = false;
  const date = moment().format('LT - ll');

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    isLiked ? 
    setNumOfLikes(numOfLikes - 1) : 
    setNumOfLikes(numOfLikes + 1);
  }

  const handleToggleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    isRetweeted ? 
    setNumRetweets(numOfRetweets -1) : 
    setNumRetweets(numOfRetweets + 1);
  }

  return (
    <TweetContext.Provider 
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets,
        isLiked,
        isRetweeted, 
        handleToggleLike,
        handleToggleRetweet
      }}>
      {children}
    </TweetContext.Provider>
  );
}