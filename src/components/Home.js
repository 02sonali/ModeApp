import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
export const Home = () => {
   return <div>
      <Jumbotron>
         <h1>Mode</h1>
         <p>
            A place to express yourself and share your knowledge.<br/>
            Signup to start writing your own articles.
         </p>
         <p>
            <Link to="/articles">
               <Button variant="primary">Explore Articles</Button>
            </Link>
         </p>
      </Jumbotron>
   </div>
}

export default Home;