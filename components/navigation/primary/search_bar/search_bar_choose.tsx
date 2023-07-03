import styled from "@emotion/styled";

const Select = styled('select')({
    backgroundColor: 'var(--color-button-native-light)',
    borderRadius: '6px 0px 0px 6px',
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '12px',
    padding: '0px 10px',
    letterSpacing: '.5px',
    border: 'none',
    borderRight: '1px solid #acacac',
    maxWidth: '200px',
    textOverflow: 'ellipsis',
    zIndex: 1,

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'var(--color-button-native-dark)',
        color: 'var(--color-primary)',
    },
    '&:focus': {
        outline: 'solid 2px var(--color-focus-searchbar)',
    },
    "@media (max-width: 1080px)": {
        display: 'none',
    }
})

export default function SearchBarChoose() {
    return (
        <Select>
            <option value="">Toutes nos catégories</option>
            <option value="mens-fashion">Mode pour hommes</option>
            <option value="womens-fashion">Mode pour femmes</option>
            <option value="jewlary-and-watches">Bijoux et montres</option>
            <option value="bags-and-shoes">bags & shoes</option>
            <option value="computers">Sacs & chaussures</option>
            <option value="phone-and-tablets">Téléphone et tablettes</option>
            <option value="tools-and-hardware">Outils et matériel</option>
            <option value="home-and-furniture">Maison et meubles</option>
        </Select>
    );
}