import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import './ChatScreen.css';

function ChatScreen() {
    
    const [input, setinput] = useState('');
    const [messages, setmessages] = useState([
        {
            name:"Emma",
            image:"https://i.redd.it/en1fp14zehs51.jpg",
            messages:"What's Up...",
        },
        {
            name:"Emma",
            image:"https://i.redd.it/en1fp14zehs51.jpg",
            messages:"Hows it going...",
        },
        {
            messages:"Great....",
        },
    ]);

    const handleSend = e =>{
        e.preventDefault();

        setmessages([...messages,{messages: input}]);
        setinput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOU MATCHED WITH EMMA ON 21/10/21</p>
            {messages.map((messages) =>(
                messages.name ? (

                <div className="chatScreen_messages">
                    <Avatar fontSize="large" className="chatScreen_image" alt={messages.name} src={messages.image} />
                    <p className="chatScreen_text">{messages.messages}</p>
                </div>
                ):(
                <div className="chatScreen_messages">
                    <p className="chatScreen_textUser">{messages.messages}</p>
                </div>
                )
            ))}

            <form className="chatScreen_input">
                <input 
                value={input}
                onChange={e => setinput(e.target.value)}
                className="chatScreen_inputField"
                type="text" placeholder="Type your message"/>
                <button onClick={handleSend} type="submit" className="chatScreen_button">Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
