import { v4 as uuidv4 } from 'uuid';
import BankistAppImg from '../images/bankist_app.png';
import ReactPortImg from '../images/react-portfolio.png';
import RecipeAppImg from '../images/recipe.png';
import BankistWebImg from '../images/bankist.png';
import MaptyImg from '../images/mapty.png';
import LaravelCmsImg from '../images/laravel_cms.png';
import PigImg from '../images/pig_game.png';
import WhereAmImg from '../images/where_am_i.PNG';
import MentorianImg from '../images/mo_workshop_list.png';
import HondaImg from '../images/honda_cbr.png';
import PandaImg from '../images/panda_commerce_bootstrap.png';
import MacBookImg from '../images/mac-book-pro.png';
import FoodImg from '../images/food_network.png';
import MonstersImg from '../images/monsters.png';
import TodoImg from '../images/todo.png';

const projects = [
  {
    id: uuidv4(),
    name: 'React Portfolio',
    desc: 'I built this project with html, tailwind css & React.js',
    img: ReactPortImg,
    live: 'https://mohammad-yasin-react-portfolio.netlify.app/',
    source: 'https://github.com/myb12/react_tailwind_portfolio',
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
    name: 'Pig Game',
    desc: 'I built this project with html, css & javascript.',
    img: PigImg,
    live: 'https://myb12.github.io/pig-game/',
    source: 'https://github.com/myb12/pig-game',
  },
  {
    id: uuidv4(),
    name: 'Where am I',
    desc: 'I built this project with html, css, javascript & REST API.',
    img: WhereAmImg,
    live: 'https://myb12.github.io/where_am_i/',
    source: 'https://github.com/myb12/where_am_i',
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
    source: '',
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
  {
    id: uuidv4(),
    name: 'Mac Book Pro',
    desc: 'I built this project with html, css & javascript',
    img: MacBookImg,
    live: 'https://mac-book-pro-mohammad-yasin.netlify.app/',
    source: '',
  },
];

export default projects;
