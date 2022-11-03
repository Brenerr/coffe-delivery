import { Minus, Plus } from 'phosphor-react'

export function QuantityInput() {
  return (
    <div className="flex items-center justify-center bg-base-button rounded-md p-2">
      <button className="text-primary">
        <Minus size={14} weight="fill" />
      </button>
      <span className="text-base text-base-title px-2">01</span>
      <button className="text-primary">
        <Plus size={14} weight="fill" />
      </button>
    </div>
  )
}
