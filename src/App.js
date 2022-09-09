import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Missing from './components/Missing';
import Introduction from "./components/Introduction";
import Cameras from './components/Cameras';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth'; //to protect routes
import PersistLogin from "./components/PersistLogin";
import {Routes,Route} from 'react-router-dom';
import {useState} from 'react';

import teacher from './images/videographer.svg';
import heroImage from './images/hero.jpg';
import heroImage2 from './images/hero2.jpg';
import bgVideo from './videos/bgVideo.mov';

const expert1 = 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const expert2 = 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
const expert3 = 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
const blobbed = 'https://images.unsplash.com/photo-1526449980372-ec43cf4b9991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';


const ROLES ={
  'user': 5150,
  'cameraTUT':2001,
  'lensTUT':1984,
};

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  function menuToggle(){
    setMenuOpen(!menuOpen)
    console.log('clicked')
  }

  const [items, setItems] = useState([
    
    {
      contactPageHeader: [
        {
          header: 'contact us',
          homeLink: {
            link: '/',
            linkTitle: 'home'
          },
          secondLink: {
            link: '/profile',
            linkTitle: 'Profile'
          }
        }
      ],
      profilePageHeader: [
        {
          header: 'profile',
          homeLink: {
            link: '/',
            linkTitle: 'home'
          },
          secondLink: {
            link: '/',
            linkTitle: 'SignOut'
          }
        }
      ],
      introductionPageHeader: [
        {
          header: 'Introductions',
          homeLink: {
            link: '/',
            linkTitle: 'home'
          },
          secondLink: {
            link: '/profile',
            linkTitle: 'Profile'
          }
        }
      ],
      registerPageHeader: [
        {
          header: 'register',
          homeLink: {
            link: '/',
            linkTitle: 'home'
          },
          secondLink: {
            link: '/login',
            linkTitle: 'Login'
          }
        }
      ],
      loginPageHeader: [
        {
          header: 'Login',
          homeLink: {
            link: '/',
            linkTitle: 'home'
          },
          secondLink: {
            link: '/register',
            linkTitle: 'Register'
          }
        }
      ],
      unauthorizedPageHeader: [
        {
          header: 'Unauthorized',
          homeLink: {
            link: '/',
            linkTitle: 'home'
          },
          secondLink: {
            link: '/login',
            linkTitle: 'Login'
          }
        }
      ],
      heroData: [
        {
          bgVideo: bgVideo,
          heading1: 'LEARN FROM THE MASTERS',
          heading2: 'Get unlimited access now for NGN33,000/mo. (billed annually)',
          paragraph: 'Learn filmmaking online directly from industry-leading professionals such as Shane Hurlbut ASC, David Cole and more.',
          button: 'try free trial',
          button2: 'watch intros ',
          images :[
            {
              id:1,
              src: heroImage
            },
            {
              id:2,
              src:heroImage2
            }
          ]
        }
      ],
      expertsData: [
        {
          id: 1,
          name: 'Mr. Uttom',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elitreiciendis',
          img:expert1
        },
        {
          id: 2,
          name: 'Mr. zhafal',
          description: 'Tempora reiciendis aperiam voluptate numquam quasi assumenda minima accusamus atque, doloribus quibusdam optio.',
          img:expert2
        },
        {
          id: 3,
          name: 'Mr. maclaran',
          description: 'Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
          
          img: expert3
        }
      ],
      aboutData: [
        {
            id:1,
            img:'',
            title:'Learn new skills online with top educators',
            description:'The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.',
            list: [
                'Techniques to engage effectively with vulnerable children and young people.',
                'Join millions of people from around the world learning together.',
                'Join millions of people from around the world learning together. Online learning is as easy and natural.'
            ]
        },
        {
            id:2,
            img:teacher,
        },
        {
            id:3,
            title:'Learner outcomes on courses you will take',
            
            list: [
                'Techniques to engage effectively with vulnerable children and young people.',
                'Join millions of people from around the world learning together.',
                'Join millions of people from around the world learning together. Online learning is as easy and natural.'
            ]
        },
        {
            id:4,
            img:blobbed
        }
      ],
      testimonialData:[
        {
            id:1,
            name:'Adam Olaolu',
            comment: 'I’m not sure about the rest of you, but this is the type of educational hub that I’ve been waiting for since the day I first picked up a camera.',
            img: expert2
        },
        {
            id:2,
            name:'Temilade Josh',
            comment: 'The platform will allow artisans and filmmakers to unlock a whole new realm of educational possibilities for creatives.',
            img: expert3
        }
      ]
    }

  ])

  return (
    <Routes>
        <Route path="/" element={<Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuToggle={menuToggle} />} >
          {/* public routes */}
          <Route path="/" element={<Home items = {items}/>} />
          <Route path="contact" element={<Contact items = {items} />} />
          <Route path="register" element={<Register items = {items} />} />
          <Route path="login" element={<Login items = {items} />} />
          <Route path="unauthorized" element={<Unauthorized items = {items} />} />

          {/* we want to protect these routes */}
          <Route element={<PersistLogin />} >
            <Route element={<RequireAuth allowedRoles={[ROLES.user,ROLES.cameraTUT,ROLES.lensTUT]} />} >
              <Route path="profile" element={<Profile items = {items} />} />
            </Route>
            
            <Route element={<RequireAuth allowedRoles={[ROLES.user]} />} >
              <Route path="introduction" element={<Introduction items = {items} />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.cameraTUT,ROLES.lensTUT]} />} >
              <Route path="cameras" element={<Cameras items = {items} />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
  );
}

export default App;
//npm i react-video-js-player :to install video player