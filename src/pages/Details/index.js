import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../services/api'

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text};

  button {
    background-color: ${props => props.theme.colors.componentsBg};
    color: ${props => props.theme.colors.text};
    border: none;
    box-shadow: 1px 1px 6px 1px ${props => props.theme.colors.shadowColor};
    padding: 1rem 5rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 4rem 8rem;
  }

  @media (max-width: 1260px) {
    button {
      margin-left: 10%;
    }
  }
`

const CountryDetails = styled.div`
  font-size: 1.6rem;
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "flag info"
    "flag info"
    "flag borderCountries";

  @media (max-width: 1260px) {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin-bottom: 4rem;
  }

`

const Infos = styled.div`
  grid-area: info;
  align-self: center;

  h2 {
    font-size: 3rem;
  }

  span {
    font-weight: bold;
  }

  p {
    margin: 1.5rem 0;
  }

  @media (max-width: 1260px) {
    width: 100%;
  }
`

const BorderCountriesContainer = styled.div`
  grid-area: borderCountries;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  align-items: center;

  span {
    font-weight: bold;
  }

  @media (max-width: 1260px) {
    width: 100%;
  }
`

const BorderCountry = styled.span`
  background-color: ${props => props.theme.colors.componentsBg};
  box-shadow: 1px 1px 6px 1px ${props => props.theme.colors.shadowColor};
  padding: 1rem 4rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  margin: 0 0.5rem 0.5rem 0.5rem;
`

const Flag = styled.div`
  grid-area: flag;
  width: 55rem;
  height: 40rem;
  justify-self: center;
  box-shadow: 1px 1px 6px 1px ${props => props.theme.colors.shadowColor};

  img {
    object-fit: cover;
    width: 55rem;
    height: 40rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 1260px) {
    width: 100%;
    height: 50%;
    margin-bottom: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`

function Details() {
  let { name } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let country = await api.get(`/name/${name}?fullText=true`)
      console.log(country.data[0])

      await setCountry(country.data[0])
    }

    fetchData()
  }, [])

  return (
    <DetailsWrapper>
      <Link to="/">
        <button>Back</button>
      </Link>
      <CountryDetails>
        <Flag>
          <img src={country.flag} alt="Country flag"></img>
        </Flag>
        <Infos>
          <h2>{country.name}</h2>
          <p><span>Native Name: </span> {country.nativeName}</p>
          <p><span>Population: </span> {country.population}</p>
          <p><span>Region: </span> {country.region}</p>
          <p><span>Sub Region: </span> {country.subregion}</p>
          <p><span>Capital: </span> {country.capital}</p>
          <p><span>Top Level Domain: </span>
            {country.topLevelDomain && country.topLevelDomain.length > 0 && country.topLevelDomain.map(elem => elem)} 
          </p>
          <p><span>Currencies: </span> {country.currencies && country.currencies.map((elem, i) => (
              [i > 0 && ", ", elem.name]
            ))} </p>
          <p><span>Languages: </span> {country.languages && country.languages.map((elem, i) => (
              [i > 0 && ", ", elem.name]
            ))}</p>
        </Infos>
        <BorderCountriesContainer>
          <span>Border Countries: </span>
            {country.borders && country.borders.map(elem => (
              <BorderCountry>{elem}</BorderCountry>
            ))}
        </BorderCountriesContainer>
      </CountryDetails>
    </DetailsWrapper>
  );
}

export default Details;
