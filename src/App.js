import "./App.css";

import React, { useState } from "react";

export const App = () => {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	const onInputButtonClick = () => {
		const promptValue = prompt("Введите значение:");
		if (promptValue) {
			if (promptValue.length < 3) {
				setError("Значение должно содержать минимум 3 символа.");
			} else {
				setValue(promptValue);
				setError("");
			}
		}
	};

	const onAddButtonClick = () => {
		if (value.length >= 3) {
			const newList = [...list, { id: Date.now(), value: value }];
			setList(newList);
			setValue("");
			setError("");
		}
	};

	const isValueValid = value.length >= 3;

	return (
		<div className="app">
			<div>
				<h2>Ввод значения:</h2>
				<output>{value}</output>
				{error && <div className="error">{error}</div>}
				<button onClick={onInputButtonClick}>Ввести новое</button>
				<button onClick={onAddButtonClick} disabled={!isValueValid}>
					Добавить в список
				</button>
			</div>
			<div>
				<h2>Список:</h2>
				{list.length > 0 ? (
					<ul>
						{list.map((item) => (
							<li key={item.id}>{item.value}</li>
						))}
					</ul>
				) : (
					<p>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
};
