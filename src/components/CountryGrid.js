import React, { useEffect, useState } from 'react'
import { CountryGridItem } from './CountryGridItem'

export const CountryGrid = ({ country }) => {

    const [info, setInfo] = useState([])

    const fetchCountry = async (pais) => {
        try {
            const url = `https://restcountries.eu/rest/v2/name/${pais}`
            const resp = await fetch(url)
            const [data] = await resp.json()

            const { name: fullName, capital, region, currencies, languages, population, alpha2Code } = data
            const [{ name, symbol }] = currencies
            const [{ name: country }] = languages

            setInfo([...info, { fullName, capital, region, name, symbol, country, population, alpha2Code }])
        } catch (error) {
            window.alert("Insert a valid country")
        }

    }

    useEffect(() => {
        fetchCountry(country)
    }, [country])

    return (

        <div>
            {info.map(pais => {
                return <CountryGridItem
                    key={pais.fullName}
                    info={pais} />
            })}
        </div>
    )
}
