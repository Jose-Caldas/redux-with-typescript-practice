import { loginUser, logoutUser } from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import * as S from './styles'

const Header = () => {
  const { currentUser } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const dispatch = useAppDispatch()

  const handleLoginClick = () => {
    dispatch(loginUser({ name: 'José Caldas', email: 'jrcaldas@gmail.com' }))
  }
  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }
  return (
    <S.HeaderContainer>
      <p>redux-typescript</p>
      {currentUser && <p>Bem-vindo, José Caldas</p>}
      <S.HeaderButton type="button">
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
      </S.HeaderButton>
    </S.HeaderContainer>
  )
}

export default Header
