import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Card } from './styles'

export interface CoffeeData {
  id: string
  name: string
  description: string
  categories: string[]
  price: number
  imgUrl: string
}

export function CardCoffee(coffee: CoffeeData) {
  console.log(`../../../../assets/Coffees/${coffee.imgUrl}.png`)
  return (
    <Card className="flex flex-col items-center justify-center bg-base-card p-5">
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
            {coffee.price / 100}0
          </span>
        </strong>

        <div className="flex items-center justify-center gap-2">
          <QuantityInput />
          <button
            title="Checkout"
            className="rounded-md p-2 bg-primary-dark text-base-card"
          >
            <ShoppingCart fontSize="1.375rem" weight="fill" />
          </button>
        </div>
      </div>
    </Card>
  )
}
