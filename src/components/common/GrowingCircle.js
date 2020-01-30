import posed from 'react-pose';

export default posed.img({
  hidden: { 
    width: "20vmax",
    height: "20vmax",
    opacity: 0
  },
  visible: { 
    width: "20vmax",
    height: "20vmax",
    opacity: 1,
    transition: { duration: 500 } 
  }
});

export const FadingCircleClassNames = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
};