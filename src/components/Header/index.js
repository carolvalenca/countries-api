import styled from 'styled-components'
import MoonIcon from '../../assets/moon-outline.svg'
import SunIcon from '../../assets/icons8-sun.svg'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
    background: ${props => props.theme.colors.componentsBg};
    color: ${props => props.theme.colors.text};

    h3 {
        font-size: 2rem;
    }

    button {
        color: ${props => props.theme.colors.text};
        display: flex;
        align-items: center;
        background: none;
        border: none;
        font-size: 1.4rem;
        cursor: pointer;

        img {
            height: 2rem;
            width: 2rem;
            margin-right: 1rem;
        }
    }

    @media(max-width: 800px) {
        padding: 2rem 3rem;
        h3{
            font-size: 1.6rem;
        }

        button {
            font-size: 1.2rem;
        }
    }
`

function Header({ changeTheme, theme }) {
    return (
        <HeaderWrapper>
            <h3>Where in the world?</h3>
            <button onClick={changeTheme}>
                <img src={theme === 'light' ? MoonIcon : SunIcon} alt="Mode icon"></img>
                {theme === 'light' ? "Dark Mode" : "Light Mode"}
            </button>
        </HeaderWrapper>
    )
}

export default Header;