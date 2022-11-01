import hero from '../../assets/coffee.png'
import { ListCoffees } from './components/ListCoffees'
import { ListFeatures } from './components/ListFeatures'
import { LayoutContainer } from './styles'

export function Home() {
  return (
    <div>
      <div className="flex items-center justify-between gap-14 py-8 flex-col lg:py-24 lg:flex-row">
        <LayoutContainer>
          <h1 className="text-5xl font-extrabold text-base-title mb-4">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl text-base-subtitle mb-16">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ListFeatures />
        </LayoutContainer>

        <img src={hero} alt="" className="w-full max-w-md" />
      </div>

      <ListCoffees />
    </div>
  )
}
