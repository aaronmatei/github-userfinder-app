import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/gitHubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const [text, setText] = useState(''); //default value of text is blank

	const onChange = e => {
		setText(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			alertContext.showAlert('Please enter some value', 'light');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} action='' className='form'>
				<input type='text' name='text' placeholder='Search Users....' value={text} onChange={onChange} />
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
			</form>
			{githubContext.users.length > 0 && (
				<button
					type='submit'
					value='Clear'
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
