import styled from "@emotion/styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled('button')({
    backgroundColor: 'var(--color-searchbar-input)',
    color: 'var(--color-background-nav-dark)',
    width: '45px',
    borderRadius: '0px 6px 6px 0px',
    border: 'none',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'var(--color-searchbar-input-hover)',
    },
    '&:active': {
        outline: 'solid 2px var(--color-focus-searchbar)',
        backgroundColor: 'var(--color-searchbar-input-hover)',
    },
    "@media (max-width: 1080px)": {
        borderRadius: '6px',
        marginLeft: '-6px',
        '&:active': {
            outline: 'none',
        },
    }
})

const Icon = styled(FontAwesomeIcon)({
    marginTop: '3px',
    height: '20px',
})

export default function SearchBarLaunch() {
    return (
        <Button>
            <Icon icon={faMagnifyingGlass} />
        </Button>
    );
}