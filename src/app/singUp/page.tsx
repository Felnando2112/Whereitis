
import styles from "../cssModules/singIn.module.css";


export default function SingUp(){
    return(
        <div className={styles.formContact}>
          <label className={styles.label}>Name</label>
          <input className={styles.input} placeholder="Value" type="text" />
          <label className={styles.label}>Password</label>
          <input className={styles.input} placeholder="Value" type="password" />
          <label className={styles.label}>Email</label>
          <input className={styles.input} placeholder="Value" type="email" />
          <input className={styles.button} placeholder="Submit" type="submit"/>
      </div>
    )
}