import React from 'react'

export const CountryGridItem = ({ info }) => {
    let wikipedia = `https://es.wikipedia.org/wiki/${info.fullName}`
    let flag = `https://www.countryflags.io/${info.alpha2Code}/flat/64.png`

    return (
        <div className="col-6 my-3 w-100 animate__animated animate__fadeInDown animate__delay-0.5s">
            <div className="text-center card bg-secondary opacity-80">
                <h2 className="card-title text-uppercase ">{info.fullName} <img src={flag} alt="flag"></img></h2>
                <ul>
                    <p><span>Located in <i class="bi bi-geo"></i> - </span> {info.region}</p>
                    <p><span>Country/capital <i class="bi bi-geo-alt"></i> - </span>{info.fullName} - {info.capital} </p>
                    <p><span>Population <i class="bi bi-people"></i></span> - {info.population}</p>
                    <p><span>Currency <i class="bi bi-cash-coin"></i></span> - {info.name}</p>
                    <p><span>Languague <i class="bi bi-translate"></i></span>  -  {info.country}</p>
                    <a target="_blank" href={wikipedia} className="btn btn-primary footer">+ INFO</a>
                </ul>
            </div>
        </div>
    )
}
