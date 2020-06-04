import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as ArticleActions from '../../redux/actions/articleActions';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';

class ArticleList extends React.Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.props.getArticles("all");
    }

    getDate(dateStr) {
        const formatDate = new Date(dateStr);
        var months = ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return `${months[formatDate.getMonth()]}  ${formatDate.getDate()},  ${formatDate.getFullYear()}`;
    }
    
    render() {
        const listItems = this.props.articles ? this.props.articles.map((article) =>
            <ListGroup.Item key={article.slug} className="text-left">
                <h6>{article.author.username}</h6>
                <span>{this.getDate(article.createdAt)}</span>
                <Link to={`/articles/${article.slug}`}>
                    <div className="mt-4">
                        <h4 className="article-title">{article.title}</h4>
                        <p className="article-body">{article.description}</p>
                    </div>
                </Link>
            </ListGroup.Item>
        ): "no data"
        return <>
        <h4 className="mt-4"> Global Feed </h4>
        <ListGroup variant="flush" className="container p-4">
            {listItems}
        </ListGroup>
        </>
    }
}

ArticleList.propTypes = {
    getArticles: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    let articles = [];
    state.articles.allSlugs.forEach((slug) => articles.push(state.articles.bySlug[slug])) ;
    return {
        articles: articles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticles: () => dispatch(ArticleActions.getArticles("all")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);