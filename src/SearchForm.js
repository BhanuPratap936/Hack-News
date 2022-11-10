import React from "react";
import { useGlobalContext } from "./context";
import logo from "./logo.svg";

const SearchForm = () => {
	const { query, handleSearch } = useGlobalContext();

	return (
		<form className="search-form" onSubmit={(e) => e.preventDefault()}>
			<div>
				<img src={logo} alt="hack news" />
				<div className="underline"></div>
			</div>
			<input
				type="text"
				className="form-input"
				value={query}
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
