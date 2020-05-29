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
    
    render() {
        const listItems = this.props.articles ? this.props.articles.map((article) =>
            <ListGroup.Item key={article.slug}>
                <h6>{article.author.username}</h6>
                <span>{article.createdAt}</span>
                <Link to={`/articles/${article.slug}`}>
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                </Link>
            </ListGroup.Item>
        ): "no data"
        return <ListGroup variant="flush">
            {listItems}
        </ListGroup>
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