import React, {useEffect} from 'react';
import AddComment from '../Comment/AddComment';
import CommentList from '../Comment/CommentList';
import {connect, useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import * as ArticleActions from '../../redux/actions/articleActions';
import {useParams} from 'react-router-dom';

export const ArticleDetails = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    useEffect(() => {
        dispatch(ArticleActions.getArticleDetails(slug));
    }, [slug]);
    const article = useSelector(
        state => state.articles.bySlug
    )
    const getDate = function(dateStr) {
        const formatDate = new Date(dateStr);
        var months = ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return `${months[formatDate.getMonth()]}  ${formatDate.getDate()},  ${formatDate.getFullYear()}`;
    } 
    return <div className="container p-4 text-left">
        <div className="article-header">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {/* <h6>{article.author.username}</h6> //TODO - author i.e. nested object is not copied by spread operator} */ }
            <span>{getDate(article.createdAt)}</span>
        </div>
        <div className="article-body">
            <p>{article.body}</p>
        </div>
        <AddComment/>
        {/* <CommentList/> */}
    </div>
}

ArticleDetails.protoTypes = {
    getArticleDetails: PropTypes.func.isRequired
}

export default connect()(ArticleDetails);