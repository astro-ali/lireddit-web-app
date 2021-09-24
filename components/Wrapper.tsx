import { Box } from '@chakra-ui/layout';
import React from 'react'

interface WrapperProps {
    variant?: "small" | "reguler";
}

export const Wrapper: React.FC<WrapperProps> = ({children, variant="reguler"}) => {
        return (
            <Box maxW={variant === "reguler" ? "800px" : "400px"} mt={8} mx="auto" w="100%">
                {children}
            </Box>
        );
}