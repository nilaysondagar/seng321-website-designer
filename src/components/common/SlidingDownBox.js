import posed from 'react-pose';

export default posed.div({
  hidden: { 
    y: '-100%'
  },
  visible: { 
    y: '0%',
    transition: { duration: 500 } 
  }
});

export const SlidingDownBoxClassNames = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
};