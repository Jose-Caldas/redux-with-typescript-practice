import { loginUser, logoutUser } from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import * as S from './styles'
import Cart from '../cart'
import { useState } from 'react'

const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false)
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

  const handleCartClick = () => {
    setCartIsVisible(true)
  }
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderLogo>Shopping</S.HeaderLogo>
        {currentUser && <p>Bem-vindo, José Caldas!</p>}
        <S.HeaderButton type="button">
          {currentUser ? (
            <div onClick={handleLogoutClick} title="Sair">
              Sair
            </div>
          ) : (
            <div onClick={handleLoginClick} title="Login">
              Login
            </div>
          )}
        </S.HeaderButton>
        <S.HeaderViewCart title="Carrinho" onClick={handleCartClick}>
          Carrinho
        </S.HeaderViewCart>
        <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default Header
