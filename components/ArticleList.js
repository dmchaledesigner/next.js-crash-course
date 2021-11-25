import Article from './Article';
import styles from './ArticleList.module.css';


const ArticleList = (props) => {
    return (
        <div className={styles.grid}>
            {
                props.articles && props.articles.map((article) => (
                    <Article key={article.id} article={article} />
                ))
            }
        </div>
    )
}

export default ArticleList
