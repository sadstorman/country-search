import React, { useState } from 'react'
import { CountryGrid } from './CountryGrid'
import PropTypes from 'prop-types'

export const AddCountries = ({ setCountries }) => {
    const [value, setValue] = useState(' ')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(value.trim().length > 2 ) {
            setCountries(country => [value, ...country])
            setValue('')
        } else {
            window.alert("Insert a valid country")
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className="text-center">
                <input
                    type="text"
                    autoComplete="off"
                    name="country"
                    value={value}
                    onChange={handleChange}
                    placeholder="Insert a country..."
                    className="form form-control w-100 mb-2">
                </input>

                <button
                    type="submit"
                    className="btn btn-danger w-25 mb-4">
                    <i class="bi bi-search"></i>
                </button>
            </form>
        </div>
    )
}
AddCountries.propTypes = {
    setCountries: PropTypes.func.isRequired
}
