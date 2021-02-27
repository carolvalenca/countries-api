import styled from 'styled-components'
import { useState, useEffect } from 'react'
import api from '../../services/api'

import Card from '../../components/Card'
import SearchInput from '../../components/SearchInput'
import FilterSelect from '../../components/FilterSelect'

const Content = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 100%;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5.2rem;

  @media(max-width: 800px) {
    flex-direction: column;
    padding: 3rem 0;
  }
`

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 6rem;
  margin: 0 4rem 4rem 4rem;
  // padding: 0 4rem 4rem 4rem;

  @media(max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

function Main() {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [region, setRegion] = useState("All");

useEffect(() => {
  //faz as requisicoes pra api
    const fetchData = async () => {
        let countries = await api.get('/all')

        await setCountries(countries.data)
        await setCountriesToShow(countries.data)
        }
  
        fetchData()
    }, [])


  function filterCountriesByRegion(filter){
    let arr = []
    if (filter === "All") {
      arr = countries
    } else {
      arr = countries.filter(elem => elem.region === filter)
      console.log(region)
    }
    setRegion(filter)

    setCountriesToShow(arr)
  }

  function filterCountriesByName(filter) {
    let arr = []
    if (region === "All") {
      arr = countries.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()))
    } else {
      arr = countries.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()) && elem.region === region)
    }
    setCountriesToShow(arr)
  }

  return (
    <Content>
      <Search>
        <SearchInput filterCountriesByName={filterCountriesByName}/>
        <FilterSelect filterCountriesByRegion={filterCountriesByRegion}/>
      </Search>
      <CardsWrapper>
      {countriesToShow && countriesToShow.map(elem => (
          <Card key={elem.name} elem={elem}/>
      ))}
      </CardsWrapper>
    </Content>
  );
}

export default Main;
