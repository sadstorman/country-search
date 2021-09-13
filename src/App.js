import React, { useState } from 'react'
import { AddCountries } from './components/AddCountries'
import { CountryGrid } from './components/CountryGrid'
import "bootswatch/dist/cyborg/bootstrap.min.css";

export const App = () => {

  const [countries, setCountries] = useState([])

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center text-uppercase">Country searcher</h1>
          {
            <AddCountries setCountries={setCountries} />
          }

          <br />       
        </div>

        <div className="row">
        {countries.map(country => {
          return <CountryGrid key={country} country={country} />
        })}
        </div>
      </div>
    </>
  )
}
