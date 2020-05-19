import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id:1,
        title: "title1",
        author: "author1",
        text: "text1"
    },

    {
        id:2,
        title: "title2",
        author: "author2",
        text: "text2"
    },

    {
        id:3,
        title: "title3",
        author: "author3",
        text: "text3"
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} /> //przekazanie wszystkich propsow operatorem ...
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;