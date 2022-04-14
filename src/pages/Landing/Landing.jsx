import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello {user ? user.name : 'world'}</h1>
      {user ? <o>welcome back to apps 124</o>
        :    
        <p> Welcome to apps124</p>
      }
      <p>please launch the terminal to get started</p>
    </main>
  )
}

export default Landing
