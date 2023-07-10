"use client";
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

interface TanstackQueryProviderProps {
    children?: React.ReactNode
}

const TanstackQueryProvider = ({
    children
}: TanstackQueryProviderProps) => {
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default TanstackQueryProvider;