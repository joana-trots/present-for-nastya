import './index.sass'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
    const [responsed, setResponsed] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_j46beqb', 'template_sdh5mcq', '#contact-form', 'uEvqLwIMS_CzlJXGA')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setResponsed(!responsed)
        }, function(error) {
        console.log('FAILED...', error);
        });
    }
    return (
        <div className='form-page'>
            <section>
                <h1 className={responsed ? 'caption' : 'caption display-none'}>Готово!<br/>Проверь свою почту 😉</h1>
                <form id="contact-form" className={responsed ? 'contact-form display-none' : 'contact-form'} onSubmit={sendEmail}>
                    <h1>Заполни</h1>
                    <p className='alt-text--1'>За один раз - один билет</p>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Введи свой Email</label>
                        <input className="form-control" type="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="route" className="form-label">Выбери маршрут</label>
                        <select className="form-select" name="route">
                            <option value="Калинковичи - Минск">Калинковичи - Минск</option>
                            <option value="Минск - Калинковичи">Минск - Калинковичи</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='message'>Добавь комментарий</label>
                        <textarea name="message" required></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Едем!" className='btn btn--text' />
                    </div>
                </form>
            </section>
        </div>
        
        
    )
}

export default Form