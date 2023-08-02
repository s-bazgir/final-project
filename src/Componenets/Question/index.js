import { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa";
import  "./style.css";

export default function PanelMoviesByGenre(props) {
    const { question, answer } = props;
    const [expanding, setExpanding] = useState(false);

    function expand() {
        setExpanding(!expanding);
    }

    return (
        <Fragment>
            <div className={`expandpart ${expanding ? 'expanded' : ''}`}>
                <div className="level" onClick={expand}>
                    <p>{question}</p>
                    <i className={`expnad-btn ${expanding ? 'rotateclass' : 'vrotateclass'}`}><FaPlus /></i>
                </div>
                <div className={`desc ${expanding ? 'desc-expand' : 'desc-hide'}`}>{answer}</div>
            </div>
        </Fragment>
    )
}
