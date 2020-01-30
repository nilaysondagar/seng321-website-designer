import posed from 'react-pose';

export default posed.div({
  hidden: { 
    y: '200px',
    opacity: 0
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: { 
      duration: 500,
      ease: 'easeOut'
    }
  }
});

export const SlidingUpClassNames = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
};