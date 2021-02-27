import styled from 'styled-components'

const FilterSelectWrapper = styled.select`
    background: ${props => props.theme.colors.componentsBg};
    color: ${props => props.theme.colors.inputText};
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 15rem;
    border: none;
    box-shadow: 1px 1px 6px 1px ${props => props.theme.colors.shadowColor};
`

function FilterSelect({ filterCountriesByRegion }) {
    return (
        <FilterSelectWrapper placeholder='Filter by region...' onChange={(event) => filterCountriesByRegion(event.target.value)}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </FilterSelectWrapper>
    )
}

export default FilterSelect;