import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello {user ? user.name : 'world'}</h1>
      <p>please launch the terminal to get started</p>
    </main>
  )
}

export default Landing
