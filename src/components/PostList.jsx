import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import styles from "./PostList.module.css"
import { useEffect, useState } from "react";

const PostList = (props) => {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true)
            const response = await fetch('http://localhost:8080/posts')
            //json method taking JSON as input,but the result is a js object
            const resData = await response.json()
            setPosts(resData.posts)
            setIsFetching(false)
        }
        fetchPosts()
    }, []);

    const addPostHandler = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //updating state based on the previous state.
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {props.isPosting && (
                <Modal onClose={props.onStopPosting}>
                    <NewPost
                        onCancel={props.onStopPosting}
                        onAdd={addPostHandler} />
                </Modal>
            )}
            {!isFetching && posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map(
                        (post) => <Post key={post.body} auther={post.auther} body={post.body} />
                    )}
                </ul>
            )}
            {!isFetching && posts.length == 0 && (
                <div className={styles.noPost}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign: 'center' }}>
                    <p>Loading Post...</p>
                </div>
            )}
        </>
    )
}

export default PostList