import { CardCoffee } from '../CardCoffee'
import { ListContainer } from './styles'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { useContext } from 'react'

export function ListCoffees() {
  const { coffees } = useContext(CoffeesContext)
  return (
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
            quantity={coffee.quantity}
          />
        )
      })}
    </ListContainer>
  )
}
