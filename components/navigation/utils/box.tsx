import styled from "@emotion/styled";
import Link from "next/link";

const BoxContainer = styled('div')({
  height: '100%',
  '&:nth-of-type(n)': {
    padding: '10px 9px',
    border: '1px solid transparent',
    borderRadius: '2px',
  },
  '&:hover': {
    cursor: 'pointer',
    '&:nth-of-type(n)': {
      borderColor: 'white',
    },
  },
})

export default function Box({ children, link }: { children: React.ReactNode, link?: string }) {
  return link ? <Link href={link}> <BoxContainer> {children} </BoxContainer> </Link>
    : <BoxContainer> {children} </BoxContainer>
}