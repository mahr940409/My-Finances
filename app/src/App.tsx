import React from 'react';
import { FinanceProvider } from './contexts/FinanceContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { TransactionForm } from './components/TransactionForm';
import { TransactionHistory } from './components/TransactionHistory';
import { BalanceSummary } from './components/BalanceSummary';
import { Layout } from './components/Layout';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <FinanceProvider>
          <Layout>
            <TransactionForm />
            <TransactionHistory />
            <BalanceSummary />
          </Layout>
        </FinanceProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
