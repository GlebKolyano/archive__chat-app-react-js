

const MyMessage = ({message}) => {
  if (message?.attachments?.length > 0) {
    return (
      <img src={message.attachments[0].file}
      className="message__image"
      alt="message-img"
      style={{float: "right"}}/>
    )
  }
  return (
    <div className="message" style={{float: "right", marginRight: "18px", color: "white", backgroundColor: "#9B2A50"}}>
      {message.text}
    </div>
  )
}

export default MyMessage