import { WhiteCard } from '../../components'
import { Bears, useBearStore } from '../../stores'

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        <BearsCard bears={'black'} title='Osos Negros' />
        <BearsCard bears={'polar'} title='Osos Polares' />
        <BearsCard bears={'panda'} title='Osos Panda' />
      </div>
    </>
  )
}

interface BearsCardsProps {
  title: string
  bears: Bears
}

export const BearsCard = ({ bears, title }: BearsCardsProps) => {
  const state = useBearStore(state => state[`${bears as Bears}Bears`])
  const increaseBears = useBearStore(state => state.increaseBears)
  const decreaseBears = useBearStore(state => state.decreaseBears)

  return (
    <WhiteCard centered>
      <h2>{title}</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increaseBears(bears, 1)}>+1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {state} </span>
        <button onClick={() => decreaseBears(bears, 1)}>-1</button>
      </div>
    </WhiteCard>
  )
}
