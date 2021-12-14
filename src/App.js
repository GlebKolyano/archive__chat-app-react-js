
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="5a87c640-9704-4722-ac84-853fdc7f5e87"
      userName="Gleb"
      userSecret="neformal123" 
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
    />
  );
}

export default App;
