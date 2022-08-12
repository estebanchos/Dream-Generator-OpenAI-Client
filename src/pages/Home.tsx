import './Home.scss'
import { FC, useState, ChangeEvent } from "react";
import linkedinIcon from '../assets/icons/linkedin-icon.png';
import githubIcon from '../assets/icons/github-icon.png';
import mailIcon from '../assets/icons/mail-icon.png';
import charlieIcon from '../assets/icons/charlie-icon.png';
import axios from 'axios';
import { INewIdea } from '../Interfaces';
import IdeaCard from '../components/IdeaCard';
import { useEffect } from 'react';

const serverUrl: string = "http://localhost:8080/generate";

const Home: FC = () => {

    const [prompt, setPrompt] = useState<string>("")
    const [newIdeas, setNewIdeas] = useState<INewIdea[]>([])

    // Initial load of saved items, if any
    useEffect(() => {
        const saved = localStorage.getItem('ecomIdeas')
        if (saved) {
            let parsedSaved: INewIdea[] = JSON.parse(saved)
            setNewIdeas(parsedSaved)
            return
        }
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setPrompt(e.target.value)

    const generateIdeas = (): void => {
        let apiResponse: string
        axios.post(serverUrl, {
            prompt: prompt
        })
            .then(res => {
                apiResponse = res.data
                const newIdea = {
                    prompt: prompt,
                    response: apiResponse
                }
                saveIdeas(newIdea)
                setNewIdeas([newIdea, ...newIdeas])
                setPrompt('')
            })
            .catch(error => {
                console.log(`error sending request to API: ${error}`)
            })
    }

    const clearIdeas = (): void => {
        localStorage.clear()
        setNewIdeas([])
    }

    const saveIdeas = (newIdea: INewIdea): void => localStorage.setItem('ecomIdeas', JSON.stringify([newIdea, ...newIdeas]))

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
                    <h2 className="app__title">Your next eCommerce Idea starts here</h2>
                    <p className="app__description">Do you know what to sell online? Need some help?</p>
                    <p className="app__description">Dream Generator will brainstorm for you!</p>
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
                                <button
                                    className="form__button"
                                    onClick={generateIdeas}
                                    onKeyPress={(e) => e.key === 'Enter' && generateIdeas()}
                                >
                                    Generate ideas
                                </button>
                            </div>
                        </section>
                    </section>
                    <button className="app__button" onClick={clearIdeas}>
                        Clear results
                    </button>
                    {newIdeas.length > 0
                        ? <section className="app__gallery gallery">
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
                        : ''}
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