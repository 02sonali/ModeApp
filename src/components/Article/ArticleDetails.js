import React from 'react';
import AddComment from '../Comment/AddComment';
import CommentList from '../Comment/CommentList';

export const ArticleDetails = () => {
   return <div>
       <h2>Article Details Here </h2>
       <AddComment/>
       <CommentList/>
   </div>
}

export default ArticleDetails;