import axios from 'axios'

import {useParams} from 'react-router'
import {useEffect, useState} from 'react'

export const FilmPage = () => {
	const {id} = useParams()
	const [film, setFilm] = useState()

	useEffect(() => {
		const fetchFilm = async () => {
				try{
					const {data} = await axios.get(`http://localhost:5218/films/id/${id}`)
					setFilm(data)
				} catch (e) {
					console.error(e)
				}
		}
		fetchFilm()
	}, [])

	return (
		<main className='w-full'>
			<div className='flex justify-center items-center w-full py-20 flex-col'>
				<h2 className='text-3xl font-bold mb-12'>{film?.title}</h2>
				<div className='flex flex-row'>
					<img src={film?.poster} alt="film image" className='w-[22rem]'/>
					<div className='flex flex-col w-[35rem] gap-6 mx-12'>
						<h3 className='text-2xl font-semibold'>Опис</h3>
						<p>Цей фільм розповідає захопливу історію, що розгортається у світі, де кожне рішення має наслідки, а межа між добром і злом часто виявляється не такою очевидною. У центрі сюжету — головний герой, який опиняється перед складним вибором і змушений пройти крізь низку випробувань, щоб знайти себе, змінити світ навколо чи просто вижити. Фільм досліджує глибокі теми — любов, втрати, владу, боротьбу за справедливість або пошук сенсу життя — залежно від жанру, залишаючи після себе емоційний слід.
							Завдяки переконливій акторській грі, майстерній режисурі, атмосферному візуальному стилю та музиці, що підсилює кожен момент, ця стрічка не лише розважає, а й спонукає до роздумів. Ідеальний вибір для тих, хто цінує змістовне кіно з емоційною глибиною та яскравим враженням після перегляду.</p>
						<h3 className='text-2xl font-semibold'>Інша інформація</h3>
						<div className='flex gap-5'>
							<span>Рік випуску: {film?.year}</span>
							<span>Рейтинг: {film?.rating}/10</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}