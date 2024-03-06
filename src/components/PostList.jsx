import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import styles from "./PostList.module.css"
import { useState } from "react";

const PostList = () => {
    const [endertedbody, setEnteredBody] = useState('')
    const [enteredAuther, setEnteredAuther] = useState('')

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value)
    }
    const autherChangeHandler = (event) => {
        setEnteredAuther(event.target.value)
    }
    return (
        <>
            <Modal>
                <NewPost onBodyChange={bodyChangeHandler} onAutherChange={autherChangeHandler} />
            </Modal>
            <ul className={styles.posts}>
                <Post auther={enteredAuther} body={endertedbody} />
                <Post auther="Thomas" body="I like McDonald!" />
            </ul>
        </>
    )
}

export default PostList