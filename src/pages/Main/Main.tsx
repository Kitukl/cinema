import { Button } from '../../components/Button'
import { FilmCard } from '../../components/FilmCard'
import { Input } from '../../components/Input'
import { Message } from '../../components/Message'
import { filmsData } from '../../components/data'

export const Main = () => {
  return (
    <div className='flex flex-col ml-[500px] w-full'>
      <Message title='Вітаємо на ' secondpart='Watchlists'>
        Шукайте фільми, та створюйте списки з улюбленими фільмами, для того щоб
        пізніше їх переглянути. Просто натисніть відповідні кнопки для того, щоб
        додати фільм, або щоб побачити більше деталей або позначити фільм як
        переглянутий.
      </Message>
      <div className='flex flex-row my-[40px] gap-5 w-[1000px]'>
        <Input type='text' placeholder='Пошук фільму' variant='SEARCH' />
        <Button variant='primary'>Пошук</Button>
      </div>
      <h2 className='text-4xl font-bold mb-[50px]'>Популярні фільми</h2>
      <div className='flex flex-wrap gap-8'>
        {filmsData.map(el => (
          <FilmCard
            key={el.title}
            title={el.title}
            image={el.image}
            rating={el.rating}
            year={el.year}
          />
        ))}
      </div>
    </div>
  )
}
