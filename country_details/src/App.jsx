
import { useEffect, useState } from 'react';
import './App.css'
import Country from './components/Country';

function App() {
  //const [count, setCount] = useState(0)
  const [Countries, setCountries] = useState([]);

  const url= 'https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode,capital';

  const country = async()=>{
    const res= await fetch(url);
    const data= await res.json();
    setCountries(data.data);
    console.log(data.data);
  }
  useEffect(()=>{
    country()
  },[])
  
  

  return (
    <>
      <div>
        {/* <h1>{Countries.length}</h1> */}
        <ul>
          {
          // eslint-disable-next-line react/jsx-key
          Countries.map(country=> <Country name={country.name} unicodeFlag={country.unicodeFlag} currency={country.currency} flag={country.flag} dialCode={country.dialCode} capital={country.capital}>  </Country>) 
          }
        </ul>
      </div>
      
    </>
  )
}

export default App
