import React from 'react';
import data from "bootstrap/js/src/dom/data.js";
import {questions} from "../data.js";

function QuestionList() {
    return (
        <div>
            {questions.map(question =>
                <ul className='text-start'>{question.title}</ul>
            )}
        </div>
    );
}

export default QuestionList;