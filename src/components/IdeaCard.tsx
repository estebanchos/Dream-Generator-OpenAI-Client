import { INewIdea } from "../Interfaces";

interface Props {
    idea: INewIdea;
    keyPosition: number
}

const IdeaCard = ({ idea, keyPosition }: Props) => {

    let noNumbersResponse: string = idea.response.replace(/[0-9]/g, '')
    let formattedResponse: string[] = noNumbersResponse.replaceAll('-', '').replaceAll('. ', '').split('\n')
    let validIdeas: string[] = formattedResponse.filter(idea => idea.length > 20)

    return (
        <ul className="item">
            <li className="item__prompt">
                <p className={keyPosition < 1 ? "item__label item__label--first" : "item__label"}>Your Dream</p>
                <p className="item__content">{idea.prompt}</p>
            </li>
            <li className="item__response">
                <p className={keyPosition < 1 ? "item__label item__label--first" : "item__label"}>Your Endless Possibilities</p>
                <div className="item__content">
                    {validIdeas.map((idea, index) => {
                        return (
                            <p>{`${idea}`}</p>
                        )
                    })}
                </div>
            </li>
        </ul>
    );
}

export default IdeaCard;