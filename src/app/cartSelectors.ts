export const selectProductsCount = (rootReducer: any) => {
  return rootReducer.cartReducer.products.reduce(
    (acc: number, curr: { quantity: number }) => acc + curr.quantity,
    0
  )
}

export const selectProductsTotalPrice = (rootReducer: any) => {
  return rootReducer.cartReducer.products.reduce(
    (acc: number, curr: { price: number; quantity: number }) =>
      acc + curr.price * curr.quantity,
    0
  )
}
