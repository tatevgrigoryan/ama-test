import PropTypes from 'prop-types';
import './Circle.css';

const Circle = ({id, label, active, onClick}) => {

    return (
        <div>
            <div
                className={`circle-container ${active ? 'active' : 'inactive'}`}
                onClick={() => onClick(id)}
                id={label}
            >
                <div className='circle'></div>
                <span className='label'>{label}</span>
            </div>
        </div>
    );
};

Circle.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Circle;