import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '08d0d522-b9a0-44af-9755-b67b7b36fbd4';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />

        return (
            <ChatEngine
                height="100vh"
                projectID={projectID}
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        );
}

export default App;
