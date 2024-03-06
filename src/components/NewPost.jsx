import { useState } from "react"
import styles from "./NewPost.module.css"

const NewPost = (props) => {
    const [endertedbody, setEnteredBody] = useState('')
    const [enteredAuther, setEnteredAuther] = useState('')

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value)
    }
    const autherChangeHandler = (event) => {
        setEnteredAuther(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const postData = {
            body: endertedbody,
            auther: enteredAuther
        };
        console.log(postData);
        props.onAdd(postData)
        props.onCancel()
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={autherChangeHandler}></input>
            </p>
            <div className={styles.buttons}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewPost