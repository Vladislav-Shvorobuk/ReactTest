import React from 'react'
import Article from './Article'

export default function ArticleList ({ articles }) {
    const articleElements = articles.map(article => {
        return <li key={article.id}><Article article = {articles[0]}></Article></li>
    })
    return (
        <ul>
            { articleElements }
        </ul>
    )
}