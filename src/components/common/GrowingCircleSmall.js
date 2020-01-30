import posed from 'react-pose';

export default posed.img({
  hidden: { 
    width: 0,
    height: 0,
    opacity: 0
  },
  visible: { 
    width: '4vmax',
    height: '4vmax',
    opacity: 1,
    transition: { duration: 500 } 
  }
});

export const GrowingCircleSmallClassNames = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
};