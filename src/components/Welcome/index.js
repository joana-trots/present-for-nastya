import './index.sass'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className='welcome-page'>
            <section>
                <h1>🥳 <br/>Настюша,</h1> 
                <p className='alt-text--1'>моя любимая тетя<br/>и&nbsp;самая крутая девчонка,</p>
                <p className='alt-text--2'>c днем<br/>рождения 🎉</p>
                <p className="alt-text--3">Это твой подарок!</p>
            </section>
            <Link to="/present-for-nastya/rules" className="btn">→</Link>
        </div>
      ) 
}

export default Welcome