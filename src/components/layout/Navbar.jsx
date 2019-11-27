import React from 'react';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
	return (
		<div className='navbar bg-primary'>
			<h1>
				{icon} {title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</div>
	);
};
Navbar.defaultProps = {
	title: 'Github finder',
	icon: <FaGithub size={30} />,
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
};

export default Navbar;
