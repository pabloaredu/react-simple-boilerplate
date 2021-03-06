import React, {Component} from 'react';

class MessageList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      const nameColor = {color: this.props.currentUser.userColor};
          const messages = this.props.messages.map((message) => {
            if(message.type === "Message") {
              return (
                <div key={message.id} className="message">
                  <span className="message-username" style={nameColor} >{message.username}</span>
                  <span className="message-content">{message.content}</span>
                </div>
              )
            }else if(message.type === "Notification")  {
              return (
                <div key={message.id} className="message system">
                 <span> {message.username} changed their name to {message.content}.</span>
                </div>
              )
            } else if(message.type === "userJoined") {
              return (
              <div key={message.id} className="message system">
                <span> A user joined the chat</span>
              </div>
              )
            } else if(message.type === "userLeft") {
               return(
                <div key={message.id} className="message system">
                 <span> A user left the chat </span>
                </div>
               )

            }
          });
        return (
          <main className="messages">
            {messages}
          </main>
        );
    }
}

export default MessageList;

