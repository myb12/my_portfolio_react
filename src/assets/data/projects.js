import { v4 as uuidv4 } from 'uuid';
import BankistAppImg from '../images/bankist_app.png';
import RecipeAppImg from '../images/recipe.jpg';
import BankistWebImg from '../images/bankist.png';
import MaptyImg from '../images/mapty.jpg';
import LaravelCmsImg from '../images/laravel_cms.png';
import PigImg from '../images/pig_game.png';
import WhereAmImg from '../images/where_am_i.PNG';
import MentorianImg from '../images/mentorian.jpg';
import HondaImg from '../images/honda_cbr.jpg';
import PandaImg from '../images/panda_commerce_bootstrap.png';
import WeatherImg from '../images/weather.jpg';
import FoodImg from '../images/food_network.jpg';
import MonstersImg from '../images/monsters.png';
import TodoImg from '../images/todo.png';
import Chatbot from '../images/myb-chatbot.png';
import MacBookPro from '../images/mac-book-pro.png';
import MybWatches from '../images/myb-watches.jpg';
import mybTravel from '../images/myb-travel.jpg';
import DoctorsHouse from '../images/doctors-house.jpg';
import RedOnion from '../images/red-onion.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'MYB Stylish Watches',
    desc:
      'A watch related MERN stack Niche website built with ReactJs, HTML, CSS, Material UI, React Router, React hook, Firebase Authentication System, Context API, NodeJs, ExpressJs, MongoDB, JWT Token',
    img: MybWatches,
    live: 'https://myb-stylish-watches.web.app/',
    source: 'https://github.com/myb12/myb-stylish-watches-client',
    server: 'https://github.com/myb12/myb-stylish-watches-server',
  },
  {
    id: uuidv4(),
    name: 'MYB Travels',
    desc:
      'A Tour & Travel related MERN stack website built with ReactJs, HTML, CSS, React Bootstrap, React Router, React hook, Firebase Authentication System, Context API, NodeJs,ExpressJs, MongoDB.',
    img: mybTravel,
    live: 'https://myb-travel.web.app/',
    source: 'https://github.com/myb12/myb-travels-client',
    server: 'https://github.com/myb12/myb-travels-server',
  },
  {
    id: uuidv4(),
    name: 'Doctors House',
    desc:
      ' A simple health care related website built with ReactJs, HTML, CSS, Bootstrap, React Router, React hook, Firebase Authentication System, Context API.',
    img: DoctorsHouse,
    live: 'https://doctors-house-1ec0a.web.app/',
    source: 'https://github.com/myb12/doctors-house',
  },
  {
    id: uuidv4(),
    name: 'Red Onion',
    desc:
      'A simple food related website built with ReactJs, HTML, CSS, Bootstrap, React Router, React hook, Firebase Authentication System, Context API.',
    img: RedOnion,
    live: 'https://red-onion-cb5df.web.app//',
    source: 'https://github.com/myb12/red-onion',
  },
  {
    id: uuidv4(),
    name: 'React Chatbot Dashboard',
    desc:
      'I built this project with html, css, React.js, React Slick, React Hook & React-Vis',
    img: Chatbot,
    live: 'https://myb-chatbot.netlify.app/',
    source: 'https://github.com/myb12/chatbot-bytelabs-task',
  },
  {
    id: uuidv4(),
    name: 'React Todo Application',
    desc: 'I built this project with html, css & React.js',
    img: TodoImg,
    live: 'https://react-todo-app-mohammad-yasin.netlify.app/',
    source: 'https://github.com/myb12/todo-app',
  },
  {
    id: uuidv4(),
    name: 'React Monsters Rolodex App',
    desc: 'I built this project with html, scss & React.js',
    img: MonstersImg,
    live: 'https://mohammad-yasin-monsters.netlify.app/',
    source: 'https://github.com/myb12/react_monster',
  },

  {
    id: uuidv4(),
    name: 'Recipe App',
    desc: 'I built this project with html, css, javascript & Forkify API.',
    img: RecipeAppImg,
    live: 'https://recipe-app-yasin.netlify.app/',
    source: 'https://github.com/myb12/recipe-app',
  },
  {
    id: uuidv4(),
    name: 'Bankist Website',
    desc:
      'I built this project with html, css, javascript & IntersectionObserver API.',
    img: BankistWebImg,
    live: 'https://myb12.github.io/bankist/',
    source: 'https://github.com/myb12/bankist',
  },
  {
    id: uuidv4(),
    name: 'Bankist App',
    desc: 'I built this project with html, css & javascript.',
    img: BankistAppImg,
    live: 'https://myb12.github.io/bankist_app/',
    source: 'https://github.com/myb12/bankist_app',
  },
  {
    id: uuidv4(),
    name: 'Mapty - map your workouts',
    desc: 'I built this project with html, css, javascript & Geolocation API.',
    img: MaptyImg,
    live: 'https://myb12.github.io/mapty/',
    source: 'https://github.com/myb12/mapty',
  },
  {
    id: uuidv4(),
    name: 'Weather Update',
    desc:
      'I built this project with html, css, javascript & Openweathermap API',
    img: WeatherImg,
    live: 'https://mohammad-yasin-weather-update.netlify.app/',
    source: 'https://github.com/myb12/weather-update',
  },
  {
    id: uuidv4(),
    name: 'Where am I',
    desc:
      'I built this project with html, css, javascript, Geolocation API & Rest API.',
    img: WhereAmImg,
    live: 'https://myb12.github.io/where_am_i/',
    source: 'https://github.com/myb12/where_am_i',
  },
  {
    id: uuidv4(),
    name: 'Mac Book Pro',
    desc: 'I built this project with html, css & javascript.',
    img: MacBookPro,
    live: 'https://mac-book-pro-mohammad-yasin.netlify.app/',
    source: 'https://github.com/myb12/mac-book-pro',
  },
  {
    id: uuidv4(),
    name: 'Pig Game',
    desc: 'I built this project with html, css & javascript.',
    img: PigImg,
    live: 'https://myb12.github.io/pig-game/',
    source: 'https://github.com/myb12/pig-game',
  },
  {
    id: uuidv4(),
    name: 'Mentorian Opportunitied',
    desc: 'I built this project with html, css, javascript & Laravel.',
    img: MentorianImg,
    live: 'https://myb12.github.io/mentorian-opportunities/',
    source: 'https://github.com/myb12/mentorian',
  },
  {
    id: uuidv4(),
    name: 'Laravel CMS',
    desc: 'I built this project with html, css & Laravel.',
    img: LaravelCmsImg,
    live: '',
    source: 'https://github.com/myb12/laravel-cms',
  },
  {
    id: uuidv4(),
    name: 'Honda CBR',
    desc: 'I built this project with html & css.',
    img: HondaImg,
    live: 'https://honda-cbr-mohammad-yasin.netlify.app/',
    source: 'https://github.com/myb12/honda-cbr',
  },
  {
    id: uuidv4(),
    name: 'Panda Commerce',
    desc: 'I built this project with html & css.',
    img: PandaImg,
    live: 'https://myb12.github.io/panda-commerce-bootstrap/',
    source: 'https://github.com/myb12/panda-commerce-bootstrap',
  },
  {
    id: uuidv4(),
    name: 'Food Network',
    desc: 'I built this project with html & css.',
    img: FoodImg,
    live: 'https://myb12.github.io/food-network/',
    source: 'https://github.com/myb12/food-network',
  },
];

export default projects;
