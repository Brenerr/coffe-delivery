import { MapPinLine } from 'phosphor-react'
import { Input } from './styles'
import { useFormContext } from 'react-hook-form'

export function Address() {
  const { register } = useFormContext()

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
          required
          placeholder="CEP"
          minLength={8}
          maxLength={8}
          {...register('cep')}
        />
        <Input
          className="col-span-full"
          type="text"
          required
          placeholder="Rua"
          {...register('street')}
        />
        <Input
          className="col-span-full sm:col-span-3"
          type="text"
          required
          placeholder="Número"
          {...register('number')}
        />
        <Input
          className="col-span-full sm:col-span-6"
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
        <Input
          className="col-span-full md:col-span-3"
          type="text"
          required
          placeholder="Bairro"
          {...register('district')}
        />
        <Input
          className="col-span-full sm:col-span-6 md:col-span-5"
          type="text"
          required
          placeholder="Cidade"
          {...register('city')}
        />
        <Input
          className="col-span-full sm:col-span-3 md:col-span-1 uppercase"
          type="text"
          required
          minLength={2}
          maxLength={2}
          placeholder="UF"
          {...register('state')}
        />
      </div>
    </div>
  )
}
