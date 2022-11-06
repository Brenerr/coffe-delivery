import { MapPinLine } from 'phosphor-react'
import { Input } from './styles'

export function Address() {
  return (
    <div className="flex flex-col bg-base-card gap-8 p-10 rounded-md">
      <div className="flex gap-2">
        <MapPinLine fontSize="1.375rem" className="text-secondary-dark" />
        <div className="flex flex-col">
          <p className="text-base-subtitle">Endereço de Entrega</p>
          <p className="text-sm text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>

      <div className="grid grid-cols-9 gap-y-4 gap-x-3">
        <Input
          className="col-span-full md:col-span-3"
          type="text"
          placeholder="CEP"
        />
        <Input className="col-span-full" type="text" placeholder="Rua" />
        <Input
          className="col-span-full sm:col-span-3"
          type="number"
          placeholder="Número"
        />
        <Input
          className="col-span-full sm:col-span-6"
          type="text"
          placeholder="Complemento"
        />
        <Input
          className="col-span-full md:col-span-3"
          type="text"
          placeholder="Bairro"
        />
        <Input
          className="col-span-full sm:col-span-6 md:col-span-5"
          type="text"
          placeholder="Cidade"
        />
        <Input
          className="col-span-full sm:col-span-3 md:col-span-1"
          type="text"
          placeholder="UF"
        />
      </div>
    </div>
  )
}
