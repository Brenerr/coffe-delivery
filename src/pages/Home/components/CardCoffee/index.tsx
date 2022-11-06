import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  CoffeeProps,
  CoffeesContext,
} from '../../../../contexts/CoffeesContext'

export function CardCoffee(coffee: CoffeeProps) {
  const { addCoffeeToCart } = useContext(CoffeesContext)

  const [quantity, setQuantity] = useState(1)

  function handleAddToCart() {
    const coffeeToAdd = {
      id: coffee.id,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
    setQuantity(1)
  }

  function handleIncrease() {
    setQuantity((state: any) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state: any) => state - 1)
  }

  function formattedPrice(price: number): string {
    return String((price / 100).toFixed(2)).replace('.', ',')
  }

  return (
    <span className="flex flex-col items-center justify-center bg-base-card p-5 rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      <div className="w-32 mb-3">
        <img src={coffee.imgUrl} alt="" className="w-32 -mt-10" />
      </div>

      <ul className="flex items-center justify-center gap-1">
        {coffee.categories.map((category) => {
          return (
            <li
              key={category}
              className="font-bold text-xs rounded-full py-1 px-2 mb-4 bg-secondary-light text-secondary-dark"
            >
              {category.toUpperCase()}
            </li>
          )
        })}
      </ul>

      <strong className="font-baloo font-bold text-xl mb-2 text-base-subtitle">
        {coffee.name}
      </strong>
      <p className="text-center text-sm text-base-label mb-8">
        {coffee.description}
      </p>

      <div className="flex items-center justify-center gap-5">
        <strong className="font-extrabold text-2xl text-base-text">
          <span className="inline-block font-baloo before:content-['R$'] before:font-sans before:font-normal before:text-sm before:text-base-text before:mr-1">
            {formattedPrice(coffee.price)}
          </span>
        </strong>

        <div className="flex items-center justify-center gap-2">
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button
            title="Adicionar ao carrinho"
            className="rounded-md p-2 bg-primary-dark hover:bg-primary transition text-base-card"
            onClick={handleAddToCart}
          >
            <ShoppingCart fontSize="1.375rem" weight="fill" />
          </button>
        </div>
      </div>
    </span>
  )
}
