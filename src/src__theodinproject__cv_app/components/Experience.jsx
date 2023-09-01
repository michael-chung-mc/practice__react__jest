import {useState} from 'react'

function Experience () {
    const [toggle, setToggle] = useState(true);
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [responsibility, setResponsibility] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [dateFrom, setDateFrom] = useState("");

    function updateName (value){
        setCompanyName(value);
    };
    function updateTitle (value){
        setTitle(value);
    };
    function updateResponsibility (value){
        
        setResponsibility(value);
    };
    function updateDateTo (value){
        
        setDateTo(value);
    };
    function updateDateFrom (value){
        
        setDateFrom(value);
    };
    function getCard() {
        return (
            <div>
                <h1>Contact Info</h1>
                <p>{companyName}</p>
                <p>{title}</p>
                <p>{responsibility}</p>
                <p>{dateTo} - {dateFrom}</p>
                <input type="button" value="Edit" onClick={()=>{setToggle(true)}}></input>
            </div>
        );
    };
    function getForm() {
        return (
            <div>
                <h1>Submit Contact Info</h1>
                <form>
                    <p><input type="text" placeholder="Name" value={companyName} onChange={e => updateName(e.target.value)}></input></p>
                    <p><input type="text" placeholder="Title" value={title} onChange={e => updateTitle(e.target.value)}></input></p>
                    <p><input type="text" placeholder="Responsibility" value={responsibility} onChange={e => updateResponsibility(e.target.value)}></input></p>
                    <p><input type="text" placeholder="Date From" value={dateTo} onChange={e => updateDateTo(e.target.value)}></input></p>
                    <p><input type="text" placeholder="Date Until" value={dateFrom} onChange={e => updateDateFrom(e.target.value)}></input></p>
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

export default Experience;