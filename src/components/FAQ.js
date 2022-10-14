const FAQ = () => {

    const revealFxn = (e)=>{
        const qstBtn = e.target.closest('button');
        
        //end func if dot not clicked
        if(!qstBtn) return;

        // Find Parent Question  Element Tag
        const Questions = qstBtn.parentElement.parentElement;

        // Add and Remove show class on Qst Tag
        Questions.classList.toggle('show');
         
    }
     
  return (
    <div className="FAQ">
        <div className="FAQ-container">
            <h1>Frequently asked questions</h1>
            
            <div className="qst-center">

                <article className="qst" onClick={(e)=>revealFxn(e)}>
                    <div className="qst-title">
                        <p>Are all courses 100% online</p>
                        <button type="button" className="qst-btn"> 
                            <span className="plus-icon">+</span>
                            <span className="minus-icon">-</span>
                        </button>
                    </div>

                    <div className="qst-text">
                        <p>
                            Quia aperiam nihil quidem, autem distinctio voluptas! Ad officia assumenda, blanditiis maxime, exercitationem doloremque nulla labore, adipisci nostrum praesentium illum nihil magnam.
                        </p>
                    </div>
                </article>

                <article className="qst" onClick={(e)=>revealFxn(e)}>
                    <div className="qst-title">
                        <p>Officia assumenda, blanditiis maxime </p>
                        <button type="button" className="qst-btn"> 
                            <span className="plus-icon">+</span>
                            <span className="minus-icon">-</span>
                        </button>
                    </div>

                    <div className="qst-text">
                        <p>
                            Quia aperiam nihil quidem, autem distinctio voluptas! Ad officia assumenda, blanditiis maxime, exercitationem doloremque nulla labore, adipisci nostrum praesentium illum nihil magnam.
                        </p>
                    </div>
                </article>
                
                <article className="qst" onClick={(e)=>revealFxn(e)}>
                    <div className="qst-title">
                        <p>Exercitationem doloremque nulla labore, adipisci nostrum</p>
                        <button type="button" className="qst-btn"> 
                            <span className="plus-icon">+</span>
                            <span className="minus-icon">-</span>
                        </button>
                    </div>

                    <div className="qst-text">
                        <p>
                            Quia aperiam nihil quidem, autem distinctio voluptas! Ad officia assumenda, blanditiis maxime, exercitationem doloremque nulla labore, adipisci nostrum praesentium illum nihil magnam.
                        </p>
                    </div>
                </article>

                <article className="qst" onClick={(e)=>revealFxn(e)}>
                    <div className="qst-title">
                        <p>Are all courses 100% online</p>
                        <button type="button" className="qst-btn"> 
                            <span className="plus-icon">+</span>
                            <span className="minus-icon">-</span>
                        </button>
                    </div>

                    <div className="qst-text">
                        <p>
                            Doloremque nulla labore, adipisci nostrum praesentium illum nihil magnam. Ad officia assumenda, blanditiis maxime, exercitationem.
                        </p>
                    </div>
                </article>

            </div>

        </div>
    </div>
  )
}

export default FAQ