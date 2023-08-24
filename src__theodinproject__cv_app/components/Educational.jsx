import {useState} from 'react'

function Education () {
    const [toggle, setToggle] = useState(true);
    const [schoolName, setSchoolName] = useState("");
    const [study, setStudy] = useState("");
    const [date, setStudyDate] = useState("");

    function updateSchoolName (value){
        setSchoolName(value);
    };
    function updateEmailName (value){
        setStudy(value);
    };
    function updateStudyDate (value){
        
        setStudyDate(value);
    };
    function getCard() {
        return (
            <div>
                <h1>Educational Info</h1>
                <p>{schoolName}</p>
                <p>{study}</p>
                <p>{date}</p>
                <input type="button" value="Edit" onClick={()=>{setToggle(true)}}></input>
            </div>
        );
    };
    function getForm() {
        return (
            <div>
                <h1>Submit Educational Info</h1>
                <form>
                    <p><input type="text" placeholder="School Name" value={schoolName} onChange={e => updateSchoolName(e.target.value)}></input></p>
                    <p><input type="text" placeholder="Study" value={study} onChange={e => updateEmailName(e.target.value)}></input></p>
                    <p><input type="text" placeholder="Study Date" value={date} onChange={e => updateStudyDate(e.target.value)}></input></p>
                    <p><input type="button" value="Submit" onClick={()=>{setToggle(false)}}></input></p>
                </form>
            </div>
        );
    };
    return (
        <div>
        {toggle ? getForm() : getCard()}
        </div>
    )
}

export default Education;