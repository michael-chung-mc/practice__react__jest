import {useState} from 'react'

function ContactInfo() {
    const [toggle, setToggle] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function updateName (value){
        setName(value);
    };
    function updateEmail (value){
        setEmail(value);
    };
    function updatePhoneNumber (value){
        
        setPhoneNumber(value);
    };
    function getCard() {
        return (
            <div>
                <h1>Contact Info</h1>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phoneNumber}</p>
                <input type="button" value="Edit" onClick={()=>{setToggle(true)}}></input>
            </div>
        );
    };
    function getForm() {
        return (
            <div>
                <h1>Submit Contact Info</h1>
                <form>
                    <p><input type="text" placeholder="Name" value={name} onChange={e => updateName(e.target.value)}></input></p>
                    <p><input type="text" placeholder="E-Mail" value={email} onChange={e => updateEmail(e.target.value)}></input></p>
                    <p><input type="text" placeholder="Phone Number" value={phoneNumber} onChange={e => updatePhoneNumber(e.target.value)}></input></p>
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

export default ContactInfo;