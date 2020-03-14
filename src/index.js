import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Определение Menu
class Menu extends React.Component {
	render() {
		let menus = [
			'Home',
			'About',
			'Services',
			'Portfolio',
			'Contact us'
			]
		return React.createElement('div',
			null,
			menus.map((v, i) => {
				return React.createElement('div',
					{key: i},
					React.createElement(Link, {label: v})
				)
			}
		)
	)
}}


//Определение комонента Link, который пользуется Menu
class Link extends React.Component {
	render() {
		//Определяет функцию для создания фрагментов
		//URL из названий команд меню
		const url='/'
			+ this.props.label
			.toLowerCase()
			.trim()
			.replace(' ', '-')
		return React.createElement('div',
			null,
			React.createElement(
				'a',
				//Передает фрагмент URL для задания атрибута href
				{href: url},
				this.props.label
			),
			//Добавляет элемент переноса строки для разделения 
			//элементов меню
			React.createElement('br')
		);
	}
}



ReactDOM.render(
	React.createElement(
		Menu,
		null
	),
	document.getElementById('root')
	);

