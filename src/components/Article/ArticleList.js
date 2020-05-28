import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as ArticleActions from '../../redux/actions/articleActions';

class ArticleList extends React.Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.props.getArticles();
    }
    
    render() {
        const listItems = this.props.articles.map((article, index) => 
            <div key={index}>{article.title}</div>
        )
        return <div>
            {listItems}
        </div>
    }
}

ArticleList.propTypes = {
    getArticles: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    console.log(state); //todo - state is getting called 3 times here for each connct component, use Reselect here to avoid that
    return {
        articles: state.articles   
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticles: () => dispatch(ArticleActions.getArticles()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);