import { CardCoffee, CoffeeData } from '../CardCoffee'
import { COFFEES } from '../../../../data/coffee'
import { ListContainer } from './styles'

export function ListCoffees() {
  const coffees: CoffeeData[] = COFFEES

  return (
    <div className="flex flex-col gap-14 pt-8 pb-40 w-full">
      <h2 className="text-2xl font-baloo font-extrabold text-base-subtitle md:text-3xl">
        Nossos cafés
      </h2>

      <ListContainer>
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
      </ListContainer>
    </div>
  )
}
