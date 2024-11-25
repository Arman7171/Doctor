import React, { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

interface PropsType {
  children: ReactNode;
}

const ReactQueryProvider: React.FC<PropsType> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    {children}
  </QueryClientProvider>
);

export default ReactQueryProvider;
