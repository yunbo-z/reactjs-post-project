import { TbMessage } from "react-icons/tb";
import { TbMessagePlus } from "react-icons/tb";
import styles from "./MainHeader.module.css"

const MainHeader = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.header_title}>
                <TbMessage size={45}/>
                <h1>React Poster</h1>
            </div>
            <div>
                <button className={styles.button} onClick={props.onCreatePost}>
                    <TbMessagePlus />
                    New Post
                </button>
            </div>
        </header>
    )
}

export default MainHeader