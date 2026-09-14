import React, {useState} from "react";
import './contact.scss';

const Contact = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const [msg, setMsg] = useState("");
    const [msgClass, setMsgClass] = useState("msg");

    const submitMessage = async () => {
        const res = await fetch("https://api.tejasnashikkar.online/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                details: details
            })
        });

        if(res.status === 201){
            setMsg("Thank you! I'll contact you shortly.");
            setMsgClass("msg success");
            setName("");
            setEmail("");
            setDetails("");
        } else {
            setMsg("Something went wrong, please try again later.");
            setMsgClass("msg error");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        submitMessage();
    }
    return(
        <section className="sixth-wrap" id="contact-me">
            <div className="grid">
                <h5>I am always excited to work on some awesome projects, message me and let's discuss.</h5>
                <h6>Write a message for me:</h6>
                <form onSubmit={e => onSubmit(e)}>
                    <p>
                        <label><input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Name"></input></label>
                        <label><input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email"></input></label>
                    </p>
                    <p>
                        <label><span>Message: </span><textarea name="details" value={details} onChange={e => setDetails(e.target.value)} required></textarea></label>
                    </p>
                    <p>
                        <input type="submit" value="Submit"></input>
                    </p>
                </form>
                <p className={msgClass}>{msg}</p>
            </div>
        </section>
    );
};

export default Contact;