import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import articles from './fixtures';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React App</h1>
      </header>
      <main>
        <ArticleList articles = { articles } ></ArticleList>
      </main>    
    </div>
  );
}

export default App;
