import PropTypes from 'prop-types'

const Country=(props)=> {
    // console.log(props);
    // console.log(`det${props.country.name}`);

    const{name ,unicodeFlag, flag, capital,currency, dialCode }= props.country;

   
    return (
        <>
        <div className="main">
            <header className="header"> <h1>{name}</h1> <h2>{unicodeFlag}</h2> </header>
            <div className="section">
                <div className="imgsection">
                    <img src={flag} alt={unicodeFlag}/>
                </div>
                <div className="details">
                    <h2>Capital : {capital}</h2>
                    <h4>Currency: {currency}</h4>
                    <h4>DialCode: {dialCode}</h4>
                </div>
            </div>
           
        </div>
        </>
    );
};

Country.propTypes = {
    country: PropTypes.shape({
      name: PropTypes.string,
      unicodeFlag: PropTypes.string,
      flag: PropTypes.string,
      capital: PropTypes.string,
      currency: PropTypes.string,
      dialCode: PropTypes.string
    }).isRequired
  };


// Country.defaultProps={
//     capital: 'not found',
//     currency: 'not found',
//     flag: 'not found',
//     unicodeFlag: 'not found',

// }


export default Country;
