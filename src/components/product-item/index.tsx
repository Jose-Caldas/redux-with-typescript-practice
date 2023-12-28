import { BsCartPlus } from 'react-icons/bs'
import CustomButton from '../custom-button'
import * as S from './styles'

interface ProductProps {
  id: string
  price: number
  name: string
  imageUrl: string
}

interface Product {
  product: ProductProps
}

function ProductItem({ product }: Product) {
  return (
    <S.ProductContainer>
      <S.ProductImage imageurl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </S.ProductImage>

      <S.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </S.ProductInfo>
    </S.ProductContainer>
  )
}

export default ProductItem
