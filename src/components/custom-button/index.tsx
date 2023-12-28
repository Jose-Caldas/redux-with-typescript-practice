import * as Styles from './styles'

export interface CustomButtonProps {
  children: React.ReactNode
  startIcon: React.ReactNode
}

const CustomButton = ({ children, startIcon, ...rest }: CustomButtonProps) => {
  return (
    <Styles.CustomButtonContainer
      onClick={() => console.log('Clicou')}
      {...rest}
    >
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

      {children}
    </Styles.CustomButtonContainer>
  )
}

export default CustomButton
