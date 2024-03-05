import { useState } from "react"
import styles from "./NewPost.module.css"

const NewPost = (props) => {

    return(
        <form className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange}></textarea>
            </p>
            <p>{endertedbody}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required></input>
            </p>
        </form>
    )
}

export default NewPost