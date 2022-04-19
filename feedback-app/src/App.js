import React from 'react';
import Header from './component/Header';
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './component/FeedbackForm';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './component/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Post from './component/Post';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    const title = 'blog post';
    const body = 'blog body post';
    const comments = [{id: 1, text: 'comments one'}, {id: 2, text: 'comments two'}, {id: 3, text: 'comments three'}];
    // return React.createElement('div', {className: 'container'}, React.createElement('h1', {}, 'My app'));
    const loading = false;
    const showComments = true;
    const commentsBlock = (<div className='comments'>
        <h3>Comments ({comments.length})</h3>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>);

    // const [feedback, setFeedback] = useState(FeedbackData);





    if (loading) return <h1>Loading...</h1>;

    return (
        <FeedbackProvider>
        <Router>
            <Header/>
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/post/:id' element={<Post/>}/>
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    );
}

export default App
