import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AddArticle from './components/Article/AddArticle';
import ArticleList from './components/Article/ArticleList';
import ArticleDetails from './components/Article/ArticleDetails';

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/articles" exact component={ArticleList}></Route>
        <Route path="/new-article" exact component={AddArticle}></Route>
        <Route path="/articles/:slug" component={ArticleDetails}></Route>
      </Switch>
    </div>
  );
}

export default App;
