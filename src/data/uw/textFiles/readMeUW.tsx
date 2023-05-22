import React from 'react'

const ReadMeUW = () => {
	return (
		<>
			<h4>Проект: Умные краны</h4>
			<p>
				<b>Описание</b>: административная панель для работы с системой связанной
				с водопроводным оборудованием («умных бойлеров»), отображение всех
				показателей оборудования (расход горячей, холодной, газированной воды,
				потреблением энергии, вывод ошибок) в текстовом варианте и графиках,
				возможность удаленного считывания параметров оборудования и записи
				некоторых параметров, работа с пользователями — юр. лицами,
				создание/редактирование пользователей системы с разными ролями,
				отображение на карте точек с оборудованием, привязка оборудования к
				клиентам, статусы оборудования и т.п.
			</p>
			<p>
				<b>Используемые технологии</b>: reduxjs/toolkit, axios, date-fns,
				lodash, randomcolor, react, react-dadata, react-datepicker,
				react-hook-form, react-paginate, react-redux, react-router-dom,
				react-select, react-spinners, react-toastify, react-yandex-maps,
				recharts, redux-persist, socket.io-client, styled-components,
				typescript.
			</p>
			<p>
				<b>Url</b>: нет возможности указать из за юридических соглашений с
				заказчиком.
			</p>
			<p>
				<b>PS</b>: Проект создан с нуля
			</p>
		</>
	)
}

export default ReadMeUW
