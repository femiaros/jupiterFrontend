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
    ]);


    let App;
    let wrapperLength = 0;
    let movingLength= 0;
    let moveIndex = 0;
    
    let coachWrapper;
    useEffect(() =>{
        App = document.querySelector('.App');
        const coachs = document.querySelectorAll('.coach');
        coachWrapper = document.querySelector('.coach-wrapper');
        //coachwrapper lenght
        wrapperLength =  ( (coachs.length * 350) );
        movingLength = (wrapperLength / coachs.length);
    },[])
    // console.log(wrapperLength)
    // console.log(movingLength)
    let addedPixel = 20;

    const arrowForward = ()=>{
        let moveLimit;
        
        moveIndex++
        console.log(`moveindex ${moveIndex}`);
        const leftMove = (movingLength * moveIndex)
        console.log(leftMove)

        //small & large screen condition || setting slide limit
        App.getBoundingClientRect().width > 1200 ? moveLimit = ( wrapperLength - (3 * movingLength) ) : moveLimit = ( wrapperLength - (1 * movingLength) ) ;

        if(leftMove === moveLimit){
        let forwardBtn = document.querySelector('.arrow-forward');
        forwardBtn.style.display = 'none';
        return;
        } 

        coachWrapper.style.left = `-${(leftMove + addedPixel)}px`;
        addedPixel+=20;

        
    }

    const arrowBack = ()=>{
        console.log(`-----------------------------`)
        let moveLimit;
        moveIndex--
        console.log(`moveindex ${moveIndex}`)
        
        if(moveIndex === 0){
        let backBtn = document.querySelector('.arrow-back');
        backBtn.style.display = 'none';
        // return;
        }
        const leftMove = (movingLength * moveIndex)
        console.log(leftMove)

        // //small & large screen condition || setting slide limit
        // App.getBoundingClientRect().width > 1200 ? moveLimit = ( wrapperLength - (3 * movingLength) ) : moveLimit = ( wrapperLength - (1 * movingLength) ) ;

        // if(leftMove === moveLimit){
        //   let forwardBtn = document.querySelector('.arrow-forward');
        //   forwardBtn.style.display = 'none';
        //   return;
        // } 

        // coachWrapper.style.left = `-${(leftMove + addedPixel)}px`;
        // addedPixel+=20;

        
    }