import { FC } from 'react'

interface ElementWrapperProps {
  elementType: 'div' | 'span' | 'h1' | 'button'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const ElementWrapper: FC<ElementWrapperProps> = ({
  elementType,
  children,
  className,
  onClick,
}) => {
  const Element = elementType as keyof JSX.IntrinsicElements
  return (
    <Element className={className} onClick={onClick}>
      {children}
    </Element>
  )
}

export default ElementWrapper
