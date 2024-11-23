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
    console.log(data.data[0]);
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
         
          Countries.map(country => (
            <Country key={country.name} country={country} />
          ))}
        </ul>
      </div>
      
    </>
  )
}

export default App
