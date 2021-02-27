import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
    background: ${props => props.theme.colors.componentsBg};
    width: 27.5rem;
    max-width: 27.5rem;
    min-height: 30rem;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 6px 1px ${props => props.theme.colors.shadowColor};
    margin: 0;
    
    img {
        width: 27.5rem;
        height: 15rem;
        margin: 0;
        border-radius: 0.5rem 0.5rem 0 0;
        object-fit: cover;
    }
`

const CardInfo = styled.div`
    font-size: 1.6rem;
    margin: 2rem 2.5rem 2rem 2.5rem;
    color: ${props => props.theme.colors.text};

    h4 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    span {
        font-weight: bold;
    }

    p {
        margin-top: 0.5rem;
    }
`

function Card({ elem }) {
    return (
        <Link to={`/country/${elem.name}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
            <CardWrapper>
                <img src={elem.flag} alt="Country flag"></img>
                <CardInfo>
                    <h4>{elem.name}</h4>
                    <p><span>Population: </span> {elem.population}</p>
                    <p><span>Region: </span> {elem.region}</p>
                    <p><span>Capital: </span> {elem.capital}</p>
                </CardInfo>
            </CardWrapper>
        </Link>
    )
}

export default Card;