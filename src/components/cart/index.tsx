import { useAppSelector } from '../../app/hooks'
import CartItem from '../cart-item'
import * as S from './styles'

interface CartProps {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const { products } = useAppSelector((rootReducer) => rootReducer.cartReducer)
  const handleEscapeAreaClick = () => setIsVisible(false)

  return (
    <S.CartContainer isvisible={isVisible}>
      <S.CartEscapeArea onClick={handleEscapeAreaClick} />
      <S.CartContent>
        <S.CartTitle>Seu Carrinho</S.CartTitle>
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem key={product.name} product={product} />
          ))
        ) : (
          <div>
            <p>Carrinho vazio!</p>
          </div>
        )}
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
