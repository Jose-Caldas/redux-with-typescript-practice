import React from 'react'
import styles from './Header.module.css'
import { loginUser, logoutUser } from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const Header = () => {
  const { currentUser } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  console.log()
  const dispatch = useAppDispatch()

  const handleLoginClick = () => {
    dispatch(loginUser({ name: 'José Caldas', email: 'jrcaldas@gmail.com' }))
  }
  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }
  return (
    <div className={styles.header_container}>
      <p>redux-typescript</p>
      {currentUser && <p>Bem-vindo, José Caldas</p>}
      <button className={styles.header_btn} type="button">
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
      </button>
    </div>
  )
}

export default Header
