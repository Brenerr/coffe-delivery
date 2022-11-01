import { ShoppingCart } from 'phosphor-react'

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
    <div className="flex flex-col items-center justify-center bg-base-card rounded-3xl p-5">
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

      <strong className="font-bold text-xl mb-2 text-base-subtitle">
        {coffee.name}
      </strong>
      <p className="text-center text-sm text-base-label mb-8">
        {coffee.description}
      </p>

      <div className="flex items-center gap-6">
        <strong className="font-extrabold text-2xl text-base-text">
          <span className="inline-block before:content-['R$'] before:mr-1 before:text-base-text before:font-normal before:text-sm">
            {coffee.price}
          </span>
        </strong>

        {/* <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        /> */}

        <button
          title="Checkout"
          className="rounded-md p-2 bg-primary-dark text-base-card"
        >
          <ShoppingCart fontSize="1.375rem" weight="fill" />
        </button>
      </div>
    </div>
  )
}
