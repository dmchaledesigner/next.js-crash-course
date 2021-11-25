import Link from 'next/link';
import styles from './Article.module.css';



const Article = (props) => {
    // destructure the article prop we take in from the article list
    const { id, title, body } = props.article;


    return (
        // Link we set the [id] which is the page tempkate to/as the id from the props.article
        <Link href="/article/[id]" as={`/article/${id}`}>
            <a className={styles.card}>
                <h3>{title} &rarr;</h3>
                <p>{body}</p>
            </a>
        </Link>
    )
}

export default Article
