import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import { fetchNews } from '../../actions/news';
import NewsCard from './NewsCard';

class NewsList extends Component {
    componentWillMount() {
        this.props.fetchNews();
    }
    render() {
        console.log(this.props);
        return (
           
            <Container>
                <Content>
                    <FlatList 
                        data={this.props.newsArticles}
                        renderItem={({ item }) => <NewsCard key={item.title._text} article={item} />}
                    />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({ news }) => {
    return { newsArticles: news.newsArray, displayModal: news.displayModal, articleURL: news.articleURL };
};

export default connect(mapStateToProps, { fetchNews })(NewsList);
