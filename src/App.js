import React, {Suspense, lazy} from 'react';
import './App.css';
import Header from "./components/Header";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import configureStore from './redux/configureStore';
import {Provider} from "react-redux";

const initialState = {articles: {}, comments:[], user: {} }
const store = configureStore(initialState);

const Home = lazy(() => import("./components/Home"));
const Signin = lazy(() => import("./components/Signin"));
const Signup = lazy(() => import("./components/Signup"));
const AddArticle = lazy(() => import('./components/Article/AddArticle'));
const ArticleList = lazy(() => import('./components/Article/ArticleList'));
const ArticleDetails = lazy(() => import('./components/Article/ArticleDetails'));
//to implement redux code splitting for comment reducer
// .then(module => {
//   store.injectReducer('comments', module.reducer);
// }));

const customHistory = createBrowserHistory();

function App() {
  return (
    <div className="App" >
      <Provider store={store}>
        <BrowserRouter history={customHistory}>
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
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
