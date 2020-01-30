import posed from 'react-pose';

export default posed.div({
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { duration: 1000 },
    staggerChildren: 250
  }
});

export const FadingBoxClassNames = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
};