import { FC } from 'react'

interface PrimaryButtonProps {
  type: 'primary'
  label: string
}

interface SecondaryButtonProps {
  type: 'secondary'
  label: string
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps

// Type predicate function to check if props are of type PrimaryButtonProps
const isPrimaryButton = (props: ButtonProps): props is PrimaryButtonProps => {
  return props.type === 'primary'
}

export const primaryButtonProps: PrimaryButtonProps = {
  type: 'primary',
  label: 'Primary Button',
}

export const secondaryButtonProps: SecondaryButtonProps = {
  type: 'secondary',
  label: 'Secondary Button',
}

const Button: FC<ButtonProps> = props => {
  if (isPrimaryButton(props)) {
    return (
      <button type="button" className="bg-blue-500 text-white p-4 m-2">
        {props.label}
      </button>
    )
  } else {
    return (
      <button type="button" className="bg-gray-500 text-white p-4 m-2">
        {props.label}
      </button>
    )
  }
}

export default Button
