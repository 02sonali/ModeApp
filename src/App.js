import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AddArticle from './components/Article/AddArticle';
import ArticleList from './components/Article/ArticleList';

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/articles" component={ArticleList}></Route>
        <Route path="/new-article" component={AddArticle}></Route>
      </Switch>
    </div>
  );
}

export default App;
