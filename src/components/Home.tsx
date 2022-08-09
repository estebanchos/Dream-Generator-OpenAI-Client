import './Home.scss'
import { FC, useState, ChangeEvent } from "react";
import linkedinIcon from '../assets/icons/linkedin-icon.png';
import githubIcon from '../assets/icons/github-icon.png';
import mailIcon from '../assets/icons/mail-icon.png';
import charlieIcon from '../assets/icons/charlie-icon.png';

const apiUrl: string = "https://api.openai.com/v1/engines/text-curie-001/completions";

const Home: FC = () => {

    const [prompt, setPrompt] = useState<string>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setPrompt(event.target.value)


    return (
        <>
            <header>
                <section className="page-header">
                    <h1 className="page-header__title">Dream Generator</h1>
                    <p className="page-header__tagline">dream as big as you can. bring your dream online.</p>
                </section >
            </header >
            <main>
                <section className="app">
                    <h2 className="app__title">Your next Shopify Store starts here</h2>
                    <p className="app__description">Do you know what to sell online? Need some help?</p>
                    <p className="app__description">Dream generator will brainstorm for you!</p>
                    <section className="app__input">
                        <form className="form">
                            <div className="form__container">
                                <label className="form__label" htmlFor="prompt">What do you want to sell on your store?</label>
                                <input 
                                    className="form__prompt"
                                    name="prompt"
                                    id="prompt"
                                    placeholder="For example, sustainably grown coffee"
                                    value={prompt}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__container">
                                <button className="form__button">Generate ideas</button>
                            </div>
                        </form>
                    </section>
                    <button className="app__button">Clear results</button>
                    <section className="app__gallery gallery">
                        <ul className="gallery__list">
                        </ul>
                    </section>
                </section>
            </main>
            <footer>
                <section className="contact">
                    <h2 className="contact__title">Let's get in touch!</h2>
                    <article className="contact__contacts-container">
                        <a className="contact__link" href="mailto:estebanchos@outlook.com"><img className="contact__icon"
                            src={mailIcon} alt="email envelope" /></a>
                        <a className="contact__link" href="https://www.linkedin.com/in/carlosocampo/"><img className="contact__icon"
                            src={linkedinIcon} alt="linkedin logo" /></a>
                        <a className="contact__link" href="https://github.com/estebanchos"><img className="contact__icon"
                            src={githubIcon} alt="github logo" /></a>
                    </article>
                </section>
                <section className="author">
                    <img className="author__icon" src={charlieIcon} alt="emoticon from Charlie" />
                    <p className="author__signature">a website made by Charlie</p>
                </section>
            </footer>
        </>
    );
}

export default Home;