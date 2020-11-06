import React from 'react';
import { useSpring, animated } from "react-spring";

const Rotate = ({children}) => {
  const props = useSpring({
    zIndex: 2,
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
    transform: 'rotate(360deg)',
    from: { transform: 'rotate(0deg)'},
  })
  return <animated.div style={props}>{children}</animated.div>
} 

export default Rotate;