import hero from '../../assets/coffee.png'
import { ListCoffees } from './components/ListCoffees'
import { ListFeatures } from './components/ListFeatures'
import { TitleContainer } from './styles'

export function Home() {
  return (
    <div className="pb-32">
      <section className="bg-home bg-cover bg-center">
        <div className="container grid gap-8 py-5 lg:py-20 lg:grid-cols-5 lg:grid-rows-3">
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
      </section>

      <section className="container flex flex-col gap-14 py-8">
        <h2 className="text-2xl font-baloo font-extrabold text-base-subtitle md:text-3xl">
          Nossos cafés
        </h2>
        <ListCoffees />
      </section>
    </div>
  )
}
