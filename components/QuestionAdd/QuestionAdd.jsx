import React, {useState} from 'react'

export function QuestionAdd () {
    const [answer, setAnswer] = useState(-1);
    const [a, setA] = useState(50);
    const [b, setB] = useState(50);
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [score, setScore] = useState(0);

    function generateQuestion()
    {
        setA(Math.floor(Math.random()*(max-min)));
        setB(Math.floor(Math.random()*(max-min)));
    };
    function validateInput(input)
    {
        return true;
    };
    function handleInput(input)
    {
        if (validateInput(input))
        {
            if (a+b == input)
            {
                generateQuestion();
                setAnswer("");
                setScore(score+1);
            }
            else
            {
                setAnswer(input);
            }
        }
    };
    return (
        <>
            <section>Adding between {min} and {max}</section>
            <section>Score: {score}</section>
            <section>{a}+{b}</section>
            <input value={answer > 0 ? answer : ""} onChange={(e)=>handleInput(e.target.value)}></input>
        </>
    );
};

export default QuestionAdd;