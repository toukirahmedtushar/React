import PropTypes from 'prop-types'

const Country=(props)=> {
   
    return (
        <>
        <div className="main">
            <header className="header"> <h1>{props.name}</h1> <h2>{props.unicodeFlag}</h2> </header>
            <div className="section">
                <div className="imgsection">
                    <img src={props.flag} alt={props.unicodeFlag}/>
                </div>
                <div className="details">
                    <h2>Capital : {props.capital}</h2>
                    <h4>Currency: {props.currency}</h4>
                    <h4>DialCode: {props.dialCode}</h4>
                </div>
            </div>
           
        </div>
        </>
    );
};
Country.propTypes={
    name: PropTypes.string,
    capital: PropTypes.string,
    currency: PropTypes.string,
    dialCode: PropTypes.number,
    flag: PropTypes.string,
    unicodeFlag: PropTypes.unicodeFlag

}
Country.defaultProps={
    capital: 'not found',
    currency: 'not found',
    flag: 'not found',
    unicodeFlag: 'not found',

}


export default Country;
