import './index.sass'
import { Link } from 'react-router-dom'

const Rules = () => {
    return (
        <div className='rules-page'>
            <section>
                <p className='alt-text--1' style={{maxWidth: 230 + 'px'}}><b>Я дарю тебе два билета на поезд в&nbsp;любом направлении!</b> Например, если ты захочешь поехать в Минск, то билеты туда и обратно можешь получить здесь.</p>
                <p className='alt-text--1'>Все, что тебе нужно, это <b>заполнить маленькую фрому</b> в следующем окошке. И&nbsp;в&nbsp;течение короткого времени тебе на почту придет твой билет!</p>
                <p className='alt-text--1' style={{maxWidth: 230 + 'px', marginBottom: 18 + 'px'}}>Ты сможешь добавить <b>комментарий</b> со всеми пожеланиями, и я постараюсь их учесть.</p>
            </section>
            <Link to="/welcome/form" className="btn">→</Link>
        </div>
        
        
      ) 
}

export default Rules