import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"
import {PencilSimpleLine} from "@phosphor-icons/react"

export function Sidebar() {
    return (<aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1599837565318-67429bde7162?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className={styles.profile}>
            {/* <img className={styles.avatar} src= /> */}
            <Avatar src={"https://avatars.githubusercontent.com/u/43689307?v=4"} />
            <strong>matheus Pini</strong>
            <span>web  developer</span>
        </div>
        <footer>
            <a href="#"><PencilSimpleLine size={20} /> Editar seu perfil</a>
        </footer>
    </aside>)
}