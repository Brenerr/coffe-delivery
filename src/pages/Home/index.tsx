import hero from '../../assets/coffee.png'
import { LayoutContent } from '../../layouts/DefaultLayout/styles'
import { ListCoffees } from './components/ListCoffees'
import { ListFeatures } from './components/ListFeatures'
import { TitleContainer } from './styles'

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-home bg-cover bg-center w-full">
        <LayoutContent className="flex-col justify-between gap-14 py-8 lg:py-24 lg:flex-row">
          <div className="grid gap-8 lg:grid-cols-5 lg:grid-rows-3 lg:gap-y-10 lg:gap-x-8">
            <TitleContainer className="col-span-full sm:col-span-2 text-center lg:text-start lg:col-span-3 lg:row-span-2">
              <h1 className="text-3xl font-baloo font-extrabold text-base-title sm:text-4xl md:text-5xl">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-xl text-base-subtitle mt-4">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </TitleContainer>

            <div className="col-span-full flex items-center justify-center sm:col-span-1 lg:col-span-2 lg:row-span-3 lg:justify-end">
              <img src={hero} alt="" className="w-full max-w-md" />
            </div>

            <div className="col-span-full flex items-center justify-center lg:justify-start sm:col-span-1 lg:col-span-3 lg:row-span-1">
              <ListFeatures />
            </div>
          </div>
        </LayoutContent>
      </div>

      <LayoutContent>
        <ListCoffees />
      </LayoutContent>
    </div>
  )
}
