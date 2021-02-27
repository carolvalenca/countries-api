import styled from 'styled-components'

import SearchIcon from '../../assets/magnifying-glass.svg'

const SearchInputWrapper = styled.div`
    position: relative;
    width: 40rem;

    input {
        background: ${props => props.theme.colors.componentsBg};
        border: none;
        padding: 1.5rem;
        padding-left: 6rem;
        width: 100%;
        color: ${props => props.theme.colors.inputText};
        border-radius: 0.5rem;
        box-shadow: 1px 1px 6px 1px ${props => props.theme.colors.shadowColor};
        border: 0;
    }
    
    img {
        position:absolute;
        bottom: 1.3rem;
        left: 2rem;
        width: 2rem;
        height: 2rem;
    }

    @media(max-width: 800px) {
        width: 90%;
        margin-bottom: 1rem;
    }
`

function SearchInput({ filterCountriesByName }) {
    return (
        <SearchInputWrapper>
            <img src={SearchIcon} alt="Search icon"></img>
            <input type='text' placeholder='Search for a country...' onChange={(event) => filterCountriesByName(event.target.value)}>
            </input>
        </SearchInputWrapper>
    )
}

export default SearchInput;