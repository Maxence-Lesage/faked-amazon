import styled from "@emotion/styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled('button')({
    backgroundColor: '#FEBD69',
    color: '#131921',
    width: '45px',
    borderRadius: '0px 6px 6px 0px',
    border: 'none',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#F3A847',
    },
    '&:active': {
        outline: 'solid 2px #FF9900',
        backgroundColor: '#F3A847',
    },
    "@media (max-width: 1080px)": {
        borderRadius: '6px',
        marginLeft: '-6px',
        '&:active': {
            outline: 'none',
            backgroundColor: '#FEBD69',
        },
    }
})

const Icon = styled(FontAwesomeIcon)({
    fontSize: '20px',
})

export default function SearchBarLaunch() {
    return (
        <Button>
            <Icon icon={faMagnifyingGlass} />
        </Button>
    );
}