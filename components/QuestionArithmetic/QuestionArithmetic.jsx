import React, {useState} from 'react'

export function QuestionAdd () {
    const [answer, setAnswer] = useState("");
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
            newA = newB;
            newB = tmp;
        }
        else if (newOperator == "*")
        {
            while (newA > 20 && newB > 20)
            {
                newB=Math.floor(newB/10);
            }
        }
        setOperator(newOperator);
        setA(Math.floor(Math.random()*(max-min)));
        setB(Math.floor(Math.random()*(max-min)));
    };
    function handleInput(input)
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
    };
    function handleMin(input)
    {
        if (input < max)
        {
            setMin(input);
        }
    }
    function handleMax(input)
    {
        if (input > min)
        {
            setMax(input);
        }
    }
    return (
        <>
            <title>Arithmetic Speed Drill</title>
            <section>Operand Range:
                <input value={min} onChange={(e)=>handleMin(e.target.value)}></input>
                and
                <input value={max} onChange={(e)=>handleMax(e.target.value)}></input>
            </section>
            <section>Score: {score}</section>
            <section>{a}{operator}{b}</section>
            <input value={answer} onChange={(e)=>handleInput(e.target.value)}></input>
        </>
    );
};

export default QuestionAdd;