import React, {useState} from 'react'

export function QuestionAdd () {
    const [answer, setAnswer] = useState(null);
    const [a, setA] = useState(50);
    const [b, setB] = useState(50);
    const [operator, setOperator] = useState('+');
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [score, setScore] = useState(0);

    const operators = ['+','-','*','/'];

    function generateQuestion()
    {
        const roll = Math.random() * 100;
        const newOperator = operators[Math.floor(roll/25)];
        let newA = Math.floor(Math.random()*(max-min));
        let newB = Math.floor(Math.random()*(max-min));
        // parse based on operator to avoid too difficult questions
        if (newOperator == "/" && newA < newB)
        {
            const tmp = newA;
            newA = tmp;
            newB = newA;
        }
        else if (newOperator == "*")
        {
            if (newA > 20 && newB > 20)
            {
                newB=Math.floor(newB/20);
            }
        }
        setOperator(newOperator);
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
            if ((operator=='+' && a+b==input)
            || (operator=='-' && a-b==input)
            || (operator=='*' && a-b==input)
            || (operator=='/' && a-b==input))
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
            <section>Operand Range: {min} and {max}</section>
            <section>Score: {score}</section>
            <section>{a}{operator}{b}</section>
            <input value={answer} onChange={(e)=>handleInput(e.target.value)}></input>
        </>
    );
};

export default QuestionAdd;