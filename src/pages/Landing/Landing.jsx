import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome, {user ? user.name : 'friend'}</h1>
      {user ?
        <h1> YOU are not a user </h1>
      :
        <h1> YOU are not a user </h1>
      }
    </main>
  )
}

export default Landing
