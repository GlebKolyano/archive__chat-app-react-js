

const TheirMessages = ({message, lastMessage}) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
  return (
    <div className="message-wrapper">
      {isFirstMessageByUser && (
        <div className="message__avatar"
             style={{backgroundImage: `url(${message?.sender?.avatar})`}}>
        </div>
      )}
       {message?.attachments?.length > 0 
       ? (
      <img src={message.attachments[0].file}
      className="message__image"
      alt="message-img"
      style={{marginLeft: isFirstMessageByUser ? "4px" : "48px"}}/>
       ) 
       : (
         <div className="message" style={{float: "left", backgroundColor: "#CABCDC", marginLeft: isFirstMessageByUser ? "4px" : "48px"}}>
            {message.text}
          </div>
       )
  }
    </div>
  )
}

export default TheirMessages