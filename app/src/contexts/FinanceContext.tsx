import React, { createContext, useContext, useState } from 'react';

export type Currency = 'COP' | 'USD' | 'EUR';

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string; // ISO date
  currency: Currency;
}

interface FinanceState {
  transactions: Transaction[];
  addTransaction: (t: Omit<Transaction, 'id'>) => void;
}

const FinanceContext = createContext<FinanceState | undefined>(undefined);

let idCounter = 1;

export const FinanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (t: Omit<Transaction, 'id'>) => {
    setTransactions(prev => [...prev, { ...t, id: idCounter++ }]);
  };

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const ctx = useContext(FinanceContext);
  if (!ctx) throw new Error('useFinance must be inside FinanceProvider');
  return ctx;
};
