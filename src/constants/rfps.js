import rfpLink from '../assets/files/rfp.pdf';
import snowplowImage from '../assets/images/rfps/snowplowImage.jpg';
import fakeLink from '../assets/images/rfps/memeImage.jpg';
import ferryImage from '../assets/images/rfps/ferryImage.jpeg';

export const RFPS = [
  {
    image: snowplowImage,
    title: 'Snow and Ice Control',
    tagline: 'A snowplow optimization plan',
    description: 'The objective of the project is to create a program that will monitor the roads based on weather reports, the amount of snowfall in an area, and the recent plowing of snow that has happened. Using this data, we can plan the snow plow routes better, as well as better inform citizens of road conditions.',
    link: rfpLink
  },
  {
    image: ferryImage,
    title: 'Ferry Services',
    tagline: 'A ferry optimization plan',
    description: 'A ferry service optimization program that will help create a better employee and customer experience! (This isn\'t real, use the other RFP download button)',
    link: fakeLink
  }
];