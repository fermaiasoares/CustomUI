import React, { useState, useEffect } from 'react';

import { Container } from './styles';

interface ContainerProps {
    width?: number;
    height?: number;
    center?: boolean;
}

const Col: React.FC<ContainerProps> = ({ width, height, center, children }) => {
    const [flex, setFlex] = useState(false);

    useEffect(() => {
        if(width == undefined && height == undefined) {
            setFlex(true);
        }
    }, [])

    return (
        <Container width={width} height={height} flexMode={flex} center={center}>{children}</Container>
    );
}

export default Col;
