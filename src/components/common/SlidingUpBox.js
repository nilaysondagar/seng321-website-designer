import posed from 'react-pose';

export default posed.div({
  hidden: { 
    opacity: 0,
    y: 500
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 1000 },
    staggerChildren: 250
  }
});

export const SlidingUpBoxClassNames = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
};