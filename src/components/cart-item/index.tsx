import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

import * as S from './styles'

export interface ProductProps {
  id: string
  price: number
  name: string
  imageUrl: string
  quantity: number
}

export interface Product {
  product: ProductProps
}

function CartItem({ product }: Product) {
  const handleRemoveClick = () => {}

  const handleIncreaseClick = () => {}

  const handleDecreaseClick = () => {}

  return (
    <S.CartItemContainer>
      <S.CartItemImage imageurl={product.imageUrl} />

      <S.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <S.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </S.CartItemQuantity>
      </S.CartItemInfo>

      <S.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </S.RemoveButton>
    </S.CartItemContainer>
  )
}

export default CartItem
