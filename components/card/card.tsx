import styled from "@emotion/styled";

const Container = styled("div")<{ type: string }>(({ type }) => ({
    width: type === "slide" ? "100%" : "auto",
    height: type === "slide" ? "280px" : "420px",
    backgroundColor: "var(--color-light)",
    gridColumn: type === "slide" ? "1 / -1" : "auto",
}))

export default function Card({ type = "default" }: { type?: "default" | "slide" }) {
    return (
        <Container type={type}>

        </Container>
    )
}