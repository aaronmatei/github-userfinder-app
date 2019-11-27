import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<FaInfoCircle size={20} />
				{alert.msg}
			</div>
		)
	);
};

export default Alert;
