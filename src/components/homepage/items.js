import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Items = (props) => {
  const { country, confirmedCases } = props;
  const newCountry = country.split(' ').join('_');
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push(`/details/${newCountry}`)}>
      <p>
        {country}
      </p>
      <p>
        {'Confirmed cases: '}
        {confirmedCases}
      </p>
    </button>
  );
};

Items.propTypes = {
  country: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default Items;
