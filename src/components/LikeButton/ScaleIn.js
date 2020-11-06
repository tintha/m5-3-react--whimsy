import React from 'react';
import { useSpring, animated } from "react-spring";

const ScaleIn = ({children}) => {
  const props = useSpring({
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: 'scale(1)',
    from: { transform: 'scale(0)'},
    config: {
      tension: 200,
      friction: 10,
      mass: 2,
      velocity: 5
    },
  })
  return <animated.div style={props}>{children}</animated.div>
} 

export default ScaleIn;