import MessageForm from "./MessageForm"
import MyMessage from "./MyMessage"
import TheirMessages from "./TheirMessages"


const ChatFeed = ({chats, activeChat, userName, messages}) => {
  
  const chat = chats && chats[activeChat]
  
  console.log(chats)
  const getMessages = () => {
    const keys = Object.keys(messages)
    
    return keys.map((key, index) => {
      const message = messages[key]
      const lastMessageKey = index === 0 ? null : keys[index - 1]
      const isMyMessage = userName === message.sender.username

      return (
        <div key={index} style={{width: "100%"}}>
          <div className="message">
            {isMyMessage 
            ? <MyMessage message={message} /> 
            : <TheirMessages message={message} lastMessage={messages[lastMessageKey]}/>}
          </div>
          <div className="read" style={{marginRight: isMyMessage ? "18px" : "0px", marginLeft: isMyMessage ? "0px" : "68px"}}>
            read
          </div>
        </div>
        
        
      )
    })
  }



  if (!chat) return "Loading..."
  return (
    <div className="chat-feed">
      <div className="chat__title-wrapper">
        <div className="chat__title">
          {chat?.title}
        </div>
        <div className="chat__subtitle">
          {chat.people.map(person => `${person.person.username}`)}
        </div>
      </div>
      {getMessages()}
      <div style={{height: "100px"}}></div>
      <div className="message__form-wrapper">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default ChatFeed