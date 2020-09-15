import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Will Lai', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Will Lai',
  subtitle: `I'm your new Front End Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: `Hello! My name is Mateus Lai, but you can call me Will. 
  I am a Front End Web Developer mainly working in all things ReactJS(Gatsby and Next).`,
  paragraphTwo: `I also do some back end work in Node along with MongoDB`,
  paragraphThree:
    'Along with being a developer, I am a foodie, traveler, gamer, anime otaku and many other things.',
  resume: '../images/Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'PokeBoba.png',
    title: 'PokeBobaViera',
    info:
      'The home website of PokeBoba. A restaurant that serves poke bowls, baos, and boba tea. Located in Viera, FL',
    info2: 'Built with GatsbyJS',
    url: 'https://www.pokebobaviera.com/',
    repo: 'https://github.com/mwlai288/pokebao', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherapp.png',
    title: 'Weather App',
    info: 'Search weather by entering a city. Get current weather and a five day forecast',
    info2: 'Built with React+TypeScript. Used Open Weather Map as the public API',
    url: 'https://mwl-weather-app.netlify.app',
    repo: 'https://github.com/mwlai288/weatherApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatapp.png',
    title: 'Chat Cord',
    info: 'Chat application. User can create a chatroom and message everyone in the room.',
    info2:
      'Built with React and Node. Socket.io used to create connection between users. Users can also use browsers integrated voice to text feature and text to speech feature.',
    url: 'https://mwl-chat-app.netlify.app/',
    repo: 'https://github.com/mwlai288/chatCord', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mwlai288@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mwlai288/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mwlai288',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
