import './Home.scss'
import { FC, useState, ChangeEvent } from "react";
import linkedinIcon from '../assets/icons/linkedin-icon.png';
import githubIcon from '../assets/icons/github-icon.png';
import mailIcon from '../assets/icons/mail-icon.png';
import charlieIcon from '../assets/icons/charlie-icon.png';
import axios from 'axios';
import { INewIdea } from '../Interfaces';
import IdeaCard from '../components/IdeaCard';

const apiUrl: string = "https://api.openai.com/v1/engines/text-curie-001/completions";

const Home: FC = () => {
    
    const [prompt, setPrompt] = useState<string>("")
    const [newIdeas, setNewIdeas] = useState<INewIdea[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setPrompt(e.target.value)

    // const key = process.env.REACT_APP_API_KEY
    // console.log(key)
    const key: string = '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'

    const generateIdeas = (): void => {
        let apiPrompt = `Brainstorm some ideas combining ecommerce and ${prompt}`
        let authorization = `Bearer ${key}`
        let apiResponse: string
        let headersApi = {
            "Content-Type": "application/json",
            "Authorization": authorization
        };
        let dataApi = JSON.stringify({
            "prompt": apiPrompt,
            "max_tokens": 50,
            "temperature": 0.6,
            "top_p": 1,
            "frequency_penalty": 1,
            "presence_penalty": 1
        })
        axios({
            method: "post",
            url: apiUrl,
            headers: headersApi,
            data: dataApi
        })
            .then(response => {
                apiResponse = response.data.choices[0].text;
                const newIdea = {
                    prompt: prompt,
                    response: apiResponse
                }
                setNewIdeas([...newIdeas, newIdea])
                setPrompt('')
            })
            .catch(error => {
                console.log(`error sending request to API: ${error}`)
            })
    }

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
                    <h2 className="app__title">Your next eCommerce Store starts here</h2>
                    <p className="app__description">Do you know what to sell online? Need some help?</p>
                    <p className="app__description">Dream generator will brainstorm for you!</p>
                    <section className="app__input">
                        <section className="form">
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
                                <button className="form__button" onClick={generateIdeas}>Generate ideas</button>
                            </div>
                        </section>
                    </section>
                    <button className="app__button">Clear results</button>
                    <section className="app__gallery gallery">
                        <ul className="gallery__list">
                            {newIdeas.map((idea: INewIdea, index: number) => {
                                return (
                                    <li className='gallery__item' key={index}>
                                        <IdeaCard keyPosition={index} idea={idea} />
                                    </li>
                                )
                            })}
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