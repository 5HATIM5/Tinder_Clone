import React from 'react'
import './Chats.css'
import Chat from './Chat'


function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Emma Watson"
                message="Hey Hatim! How are you"
                timestamp = "10 seconds ago"
                profilePic = "https://i.redd.it/en1fp14zehs51.jpg" 
            />
            <Chat
                name="Scarlet Johansson"
                message="Whats up ..."
                timestamp = "20 seconds ago"
                profilePic = "https://www.brandsynario.com/wp-content/uploads/Scarlett-Johansson-hd-photos.jpg" 
            />
            <Chat
                name="Margot Robbie"
                message="Hi......"
                timestamp = "50 seconds ago"
                profilePic = "https://1.bp.blogspot.com/-6VN7CMA3Z2A/XFDKnssXoMI/AAAAAAAABus/WCQMy7ijIdkpIt6inDt8KTkOEfriVBswQCKgBGAs/w914/margot-robbie-129-4K.jpg" 
            />
        </div>
    )
}

export default Chats
