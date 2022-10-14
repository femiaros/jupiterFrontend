import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CoursePage from "./components/CoursePage";
import VideoPage from "./components/VideoPage";
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
import {useState,useEffect} from 'react';

import disneyLogo from './images/disney.png';
import hboLogo from './images/hbo.png';
import cnnLogo from './images/cnn.png';
import netflixLogo from './images/netflix.png';
import foxLogo from './images/fox.png';

import teacher from './images/videographer.svg';
import jupyImage1 from './images/hero.jpg';
import jupyImage2 from './images/hero2.jpg';
import jupyImage3 from './images/jupy1.jpg';
import jupyImage4 from './images/jupy2.jpg';
import jupyImage5 from './images/jupy3.jpg';
import videoCam from './images/videoCam.jpg';
import brightCam from './images/brightCam.jpg';
import bgVideo from './videos/bgReels.mp4';
import musicVideo from './images/music_video.jpg';
import videoEditting from './images/video_editting.jpg';

const expert1 = 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const expert2 = 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
const expert3 = 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
const expert4 = 'https://media.istockphoto.com/photos/confident-female-lawyer-stands-outside-office-picture-id1352488614?b=1&k=20&m=1352488614&s=170667a&w=0&h=SOItwuFr5VS3D9hyaYjEXu_CauqGBND9qaZUqnou1pM=';
const expert5 = 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrbWFuJTIwcG90cmlhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60';
const expert6 = 'https://media.istockphoto.com/photos/portrait-of-a-successful-beautician-in-her-beauty-salon-picture-id1350573740?k=20&m=1350573740&s=612x612&w=0&h=03_9px7OzQrkukpWIZcVbRhmNoPoi24lF_QEH4kLAi8=';

const blobbed = 'https://images.unsplash.com/photo-1526449980372-ec43cf4b9991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

const cameraHandle = 'https://media.istockphoto.com/photos/video-camera-with-touchscreen-picture-id1191264566?b=1&k=20&m=1191264566&s=170667a&w=0&h=scrjQQx7nGr2vlcoDkENEanK_p6Y6N2j9JJzTA49wCU=';

const setLight = 'https://images.unsplash.com/photo-1621873493371-9aea49f66b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RhZ2UlMjBsaWdodGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60';

const setDesign = 'https://images.unsplash.com/photo-1599999905143-11b518ce5e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNldCUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60';

const makeUp = 'https://images.unsplash.com/photo-1646335940131-0e25ade32348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1ha2luZyUyMHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60';

const ROLES ={
  'user': 5150,
  'cameraTUT':2001,
  'lensTUT':1984,
};

function App() {

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
              src: jupyImage1,
              detail: 'Time to skill up and become professional in the filmmaking industry.'
            },
            {
              id:2,
              src: jupyImage2,
              detail: 'Realise your aspirations and ambitions, following the mentorship of our industry leading professionals.'
            },
            {
              id:3,
              src: jupyImage3,
              detail: 'Veritatis sed quo fugiat tempore corrupti deleniti facere, quisquam, explicabo maiores.'
            },
            {
              id:4,
              src: jupyImage4,
              detail: 'Time to skill up and become professional in the filmmaking industry.'
            },
            {
              id:5,
              src: jupyImage1,
              detail: 'Realise your aspirations and ambitions, following the mentorship of our industry leading professionals.'
            }
          ],
          tvLogos:[
            {
              id:1,
              src: disneyLogo
            },
            {
              id:2,
              src: hboLogo
            },
            {
              id:3,
              src: netflixLogo
            },
            {
              id:4,
              src: cnnLogo
            },
            {
              id:5,
              src: foxLogo
            },
          ]
        }
      ],
      courseData:[
        {
          id:2001,
          title: 'Camera handling',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum quo quia ut doloremque officia iusto mollitia nihil! Rerum, numquam.',
          anchors: [
            {
              id:1,
              name: 'ola frank ',
              imgsrc: expert1
            },
            {
              id:2,
              name: 'Zaleb mac',
              imgsrc: expert6
            }
          ],
          videos: [
            {
              id:1,
              title:'necessitatibus delectus soluta minus',
              imgsrc: expert6,
              duration:'07:10',
              vidsrc:''
            },
            {
              id:2,
              title:'Officia iusto mollitia Rerum consectetur',
              imgsrc: expert6,
              duration:'45:00',
              vidsrc:''
            },
            {
              id:3,
              title:'consectetur iusto mollitia serum numquam',
              imgsrc: expert6,
              duration:'51:00',
              vidsrc:''
            },
            {
              id:4,
              title:'ipsum quo quia ut doloremque',
              imgsrc: expert6,
              duration:'25:00',
              vidsrc:''
            }
          ],
          likes:20,
          postalsrc: cameraHandle
        },
        {
          id:1998,
          title: 'Making music videos',
          description: 'Officia iusto mollitia nihil! Rerum consectetur adipisicing elit. Ab ipsum quo quia ut doloremque Lorem ipsum dolor sit amet Rerum, numquam.',
          anchors: [
            {
              id:1,
              name: 'ellen lee',
              imgsrc: expert4
            },
          ],
          videos: [
            {
              id:1,
              title:'architecto nostrum dolor sapiente magnam',
              imgsrc: expert6,
              duration:'32:00',
              vidsrc:''  
            },
            {
              id:2,
              title:'sit amet consectetur adipisicing elit',
              imgsrc: expert6,
              duration:'12:00',
              vidsrc:''        
            },
            {
              id:3,
              title:'deleniti commodi exsectus soluta minus',
              imgsrc: expert6,
              duration:'56:00',
              vidsrc:''            
            }
          ],
          likes:12,
          postalsrc: musicVideo
        },
        {
          id:2002,
          title: 'Designing a set',
          description: 'Rerum, numquam sit amet consectetur adipisicing elit. Ab ipsum quo quia ut doloremque numquam iusto mollitia nihil! officia iusto.',
          anchors: [
            {
              id:1,
              name: 'Wilcobm',
              imgsrc: expert5
            }
          ],
          videos: [
            {
              id:1,
              title:'necessitatibus delectus soluta minus',
              imgsrc: expert6,
              duration:'07:10',
              vidsrc:''
            },
            {
              id:2,
              title:'holoribus at architecto nostrum dolor',
              imgsrc: expert6,
              duration:'27:32',
              vidsrc:''
            },
            {
              id:3,
              title:'comsection soluta minutal, deleniti commodi eos',
              imgsrc: expert6,
              duration:'12:00',
              vidsrc:''
            },
            {
              id:4,
              title:'deleniti commodi exsectus soluta minus',
              imgsrc: expert6,
              duration:'32:00',
              vidsrc:''
            }
          ],
          likes:24,
          postalsrc: setDesign
        },
        {
          id:2020,
          title: 'Tripod setting',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum quo quia ut doloremque officia iusto mollitia nihil! Rerum, numquam.',
          anchors: [
            {
              id:1,
              name: 'Zhafal kyl',
              imgsrc: expert2
            },
          ],
          videos: [
            {
              id:1,
              title:'holoribus at architecto nostrum dolor',
              imgsrc: expert6,
              duration:'27:32',
              vidsrc:''
            },
            {
              id:2,
              title:'necessitatibus delectus soluta minus',
              imgsrc: expert6,
              duration:'07:10',
              vidsrc:''
            },
            {
              id:3,
              title:'lectus soluta minus, deleniti commodi eos',
              imgsrc: expert6,
              duration:'12:00',
              vidsrc:''
            },
            {
              id:4,
              title:'deleniti commodi exsectus soluta minus',
              imgsrc: expert6,
              duration:'32:00',
              vidsrc:''
            }
          ],
          likes:27,
          postalsrc: videoCam
        },
        {
          id:2010,
          title: 'Make up 101',
          description: 'Eaque quidem, repudiandae optio blanditiis unde eligendi commodi expedita obcaecati distinctio autem inventore cupiditate atque, a repellendus ipsum.',
          anchors: [
            {
              id:1,
              name: 'Maclaran',
              imgsrc: expert3
            },
            {
              id:2,
              name: 'Zaleb mac',
              imgsrc: expert6
            }
          ],
          videos: [
            {
              id:1,
              title:'skin preparation for make over',
              imgsrc: expert6,
              duration:'01:27:32',
              vidsrc:''
            },
            {
              id:2,
              title:'delectus soluta minus, deleniti commodi eos',
              imgsrc: expert6,
              duration:'17:12',
              vidsrc:''
            },
            {
              id:3,
              title:'holoribus at architecto nostrum dolor',
              imgsrc: expert6,
              duration:'27:32',
              vidsrc:''
            },
            {
              id:4,
              title:'Lorem ipsum dolor sit amet',
              imgsrc: expert6,
              duration:'11:32',
              vidsrc:''
            },
            {
              id:5,
              title:'delectus soluta minus, deleniti commodi eos',
              imgsrc: expert6,
              duration:'01:02:00',
              vidsrc:''
            }
          ],
          likes:14,
          postalsrc: makeUp
        },
        {
          id:2011,
          title: 'Set lighting',
          description: 'Eaque quidem, repudiandae optio blanditiis unde eligendi commodi expedita obcaecati distinctio autem inventore cupiditate atque, a repellendus ipsum.',
          anchors: [
            {
              id:1,
              name: 'Maclaran',
              imgsrc: expert3
            },
            {
              id:2,
              name: 'Zaleb mac',
              imgsrc: expert6
            }
          ],
          videos: [
            {
              id:1,
              title:'Choosing the right light',
              imgsrc: expert6,
              duration:'01:27:32',
              vidsrc:''
            },
            {
              id:2,
              title:'accusamus velit illo doloribus at architecto nostrum',
              imgsrc: expert6,
              duration:'15:32',
              vidsrc:''
            },
            {
              id:3,
              title:'reserunt fugiat dolore necessitatibus',
              imgsrc: expert6,
              duration:'50:32',
              vidsrc:''
            },
            {
              id:4,
              title:'velit illo accusamus doloribus at architecto nostrum',
              imgsrc: expert6,
              duration:'15:20',
              vidsrc:''
            }
          ],
          likes:9,
          postalsrc: setLight
        },
        {
          id:2012,
          title: 'Introduction to video Editting',
          description: 'Eaque quidem, repudiandae optio blanditiis unde eligendi commodi expedita obcaecati distinctio autem inventore cupiditate atque, a repellendus ipsum.',
          anchors: [
            {
              id:1,
              name: 'Maclaran',
              imgsrc: expert3
            },
            {
              id:2,
              name: 'Zaleb mac',
              imgsrc: expert6
            }
          ],
          videos: [
            {
              id:1,
              title:'Amet consectetur adipisicing elitreiciend',
              imgsrc: expert6,
              duration:'30:00',
              vidsrc:''
            },
            {
              id:2,
              title:'accusamus velit illo doloribus at architecto nostrum',
              imgsrc: expert6,
              duration:'15:32',
              vidsrc:''
            }
          ],
          likes:4,
          postalsrc: videoEditting
        }
      ],
      expertsData: [
        {
          id: 1,
          name: 'Mr. Uttom',
          description: 'Amet consectetur adipisicing elitreiciendis',
          img:expert1
        },
        {
          id: 2,
          name: 'Mr. zhafal',
          description: 'Tempora reiciendis aperiam optio.',
          img:expert2
        },
        {
          id: 3,
          name: 'Mr. maclaran',
          description: 'Officia excepturi error suscipit  enim!',
          img: expert3
        },
        {
          id: 4,
          name: 'Miss. ellen',
          description: 'suscipit excepturi error similique debitis!',
          img: expert4
        },
        {
          id: 5,
          name: 'Mr. wilcobm',
          description: 'Officia excepturi error suscipit excepturi',
          img: expert5
        },
        {
          id: 6,
          name: 'Miss. zaleb',
          description: 'Excepturi error suscipit veniam uscipit saepe enim!',
          img: expert6
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

  const [search,setSearch] = useState('');
  const [searchResults,setSearchResults] = useState([]);
  const Courses = items[0].courseData;
  useEffect(()=>{
    const filteredResults = Courses.filter(course=>(
      ((course.title).toLowerCase()).includes(search.toLowerCase()) || ((course.description).toLowerCase()).includes(search.toLowerCase())
    ))
    search === '' ? setSearchResults(filteredResults.reverse().filter((course,index)=>index<5)) : setSearchResults(filteredResults.reverse());
  },[items,search])

  return (
    <Routes>
        <Route path="/" element={<Layout />} >
          {/* public routes */}
          <Route path="/" element={<Home items = {items} courses={searchResults} search={search} setSearch={setSearch} />} />
          <Route path="contact" element={<Contact items = {items} />} />
          <Route path="register" element={<Register items = {items} />} />
          <Route path="login" element={<Login items = {items} />} />
          <Route path="/course/:id" element={<CoursePage items = {items} setItems={setItems} />} />
          <Route path="/course/:vid/:id" element={<VideoPage items = {items} setItems={setItems} />} />
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