
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem("username")) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="5a87c640-9704-4722-ac84-853fdc7f5e87"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
    />
  );
}

export default App;
