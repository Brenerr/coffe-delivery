import { Minus, Plus } from 'phosphor-react'

interface QuantityInputProps {
  onIncrease?: () => void
  onDecrease?: () => void
  quantity: number
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <div className="flex items-center justify-center bg-base-button rounded-md p-2">
      <button
        onClick={onDecrease}
        disabled={quantity === 1}
        className="text-primary hover:text-primary-dark"
      >
        <Minus size={14} weight="fill" />
      </button>
      <span className="text-base text-base-title px-2">{quantity}</span>
      <button
        onClick={onIncrease}
        className="text-primary hover:text-primary-dark"
      >
        <Plus size={14} weight="fill" />
      </button>
    </div>
  )
}
