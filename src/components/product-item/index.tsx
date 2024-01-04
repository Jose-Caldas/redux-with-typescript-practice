import { BsCartPlus } from 'react-icons/bs'
import CustomButton from '../custom-button'
import * as S from './styles'
import { addProduct } from '../../features/cart/cartSlice'
import { useAppDispatch } from '../../app/hooks'
import { IProduct } from '../interface/Product'

interface Product {
  product: IProduct
}

function ProductItem({ product }: Product) {
  const dispatch = useAppDispatch()

  const handleProductClick = () => {
    dispatch(addProduct(product))
  }

  return (
    <S.ProductContainer>
      <S.ProductImage imageurl={product.img}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </S.ProductImage>

      <S.ProductInfo>
        <p>{product.title}</p>
        <p>R${product.prevPrice}</p>
      </S.ProductInfo>
    </S.ProductContainer>
  )
}

export default ProductItem
