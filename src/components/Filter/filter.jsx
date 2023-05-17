import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => 
    <div>
        <p>Enter name</p>
        <input type="text" value={filter} onChange={onChange} />
    </div>

export default Filter;

Filter.propTyres = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}