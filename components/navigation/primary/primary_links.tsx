import React from "react";
import styled from "@emotion/styled";

const PrimaryLinksContainer = styled('div')({
    display: 'flex',
    alignItems: 'flex-end',
    gap: '5px',
    whiteSpace: 'nowrap',
})

const Special = styled('div')({
    color: '#fff',
})

const Text1 = styled('p')({
    color: '#ccc',
    fontSize: '12px',
    fontFamily: 'Arial, sans - serif',
})

const Text2 = styled('p')({
    color: '#fff',
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '.2px',
    fontFamily: 'Arial, sans-serif',
})

interface Props {
    text1: string;
    text2: string;
    special?: React.ReactNode;
    dropdown?: React.ReactNode;
}

export default function PrimaryLinks({ text1, text2, special, dropdown }: Props) {
    return (
        <PrimaryLinksContainer>
            {special &&
                <div>
                    <Special>
                        {special}
                    </Special>
                </div>
            }
            <div>
                <Text1>{text1}</Text1>
                <Text2>{text2 + (dropdown ? " " + dropdown : "")}</Text2>
            </div>
        </PrimaryLinksContainer>
    );
}