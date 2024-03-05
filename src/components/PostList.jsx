import Post from "./Post";
import styles from "./PostList.module.css"

const PostList = () => {
    const [endertedbody, setEnteredBody] = useState('')
    return(
        <ul className={styles.posts}>
            <Post auther="Mike" body={endertedbody} />
            <Post auther="Thomas" body="I like McDonald!" />
        </ul>
    )
}

export default PostList