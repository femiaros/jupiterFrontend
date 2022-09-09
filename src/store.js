const [items, setItems] = useState([
        {
            id: 1,
            title: 'Cinematography',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            img:heroImage2,
            price: 7000
        },
        {
            id: 2,
            title: 'Lens and Camera',
            description: 'Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            img:heroImage2,
            price: 5000
        },
        {
            id: 3,
            title: 'Cinematography',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            img: heroImage2,
            price: 7000
        },
        {
            id: 4,
            title: 'Cinematography',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            img:heroImage2,
            price: 7000
        },
        {
            id: 5,
            title: 'Cinematography',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!',
            img:heroImage2,
            price: 7000
        }
    ])


(
    <div className="aboutcol1">
                <div className="blob"><TbArrowCurveRight className='blob-icon'/></div>
                <h1>Learn new skills online with top educators</h1>
                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                <ul>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Techniques to engage effectively with vulnerable children and young people.</span>
                    </li>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Join millions of people from around the world learning together.</span>
                    </li>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Join millions of people from around the world learning together. Online learning is as easy and natural.</span>
                    </li>
                </ul>
            </div>
            <div className="aboutcol2">
                <img src={teacher} alt="" />
            </div>

            <div className="aboutcol1 col3">    
                <h1>Learner outcomes on courses you will take</h1>
                
                <ul>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Techniques to engage effectively with vulnerable children and young people.</span>
                    </li>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Join millions of people from around the world learning together.</span>
                    </li>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Join millions of people from around the world learning together. Online learning is as easy and natural.</span>
                    </li>
                </ul>
            </div>
            <div className="aboutcol2 col4">
                <img src={blobbed} alt="" />
            </div>
)