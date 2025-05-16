import { Button } from '../button/Button';
import { ControlButton } from './control-button/ControlButton';
import PropTypes from 'prop-types';
import styles from './control-buttons.module.css';

export const ControlButtons = ({ onEdit, onDelete }) => {
	return (
		<div className={styles['control-buttons-container']}>
			<ControlButton onClick={onEdit}>
				<img src="/img/edit-event.svg" alt="edit-event" />
			</ControlButton>
			<Button onClick={onDelete}>
				<img src="/img/delete-event.svg" alt="delete-event" />
			</Button>
		</div>
	);
};

ControlButtons.propTypes = {
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};
