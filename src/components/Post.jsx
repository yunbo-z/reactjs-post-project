import styles from './Post.module.css'

const Post = (props) => {
    return(
        <li className={styles.post}>
            <p className={styles.auther}>{props.auther}</p>
            <p className={styles.text}>{props.body}</p>
        </li>
    )
}

export default Post;