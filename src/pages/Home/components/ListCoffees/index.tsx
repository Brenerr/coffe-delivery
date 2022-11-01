import { CardCoffee, CoffeeData } from '../CardCoffee'
import { COFFEES } from '../../../../data/coffee'
import { LayoutContainer } from './styles'

export function ListCoffees() {
  const coffees: CoffeeData[] = COFFEES

  return (
    <div className="flex flex-col gap-14 pt-8 pb-40">
      <h2 className="text-3xl font-extrabold text-base-subtitle">
        Nossos cafés
      </h2>

      <LayoutContainer>
        {coffees.map((coffee) => {
          return (
            <CardCoffee
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              categories={coffee.categories}
              price={coffee.price}
              imgUrl={coffee.imgUrl}
            />
          )
        })}
      </LayoutContainer>
    </div>
  )
}
