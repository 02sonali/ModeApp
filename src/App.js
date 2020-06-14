import React, {Suspense, lazy} from 'react';
import './App.css';
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const Signin = lazy(() => import("./components/Signin"));
const Signup = lazy(() => import("./components/Signup"));
const AddArticle = lazy(() => import('./components/Article/AddArticle'));
const ArticleList = lazy(() => import('./components/Article/ArticleList'));
const ArticleDetails = lazy(() => import('./components/Article/ArticleDetails'));

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signin" exact component={Signin}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/articles" exact component={ArticleList}></Route>
          <Route path="/new-article" exact component={AddArticle}></Route>
          <Route path="/articles/:slug" component={ArticleDetails}></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
