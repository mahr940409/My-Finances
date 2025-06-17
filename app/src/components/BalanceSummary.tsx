import React from 'react';
import { useFinance } from '../contexts/FinanceContext';
import { useLanguage } from '../contexts/LanguageContext';

const labels = {
  en: { balance: 'Balance' },
  es: { balance: 'Saldo' },
};

export const BalanceSummary: React.FC = () => {
  const { transactions } = useFinance();
  const { lang } = useLanguage();
  const t = labels[lang];

  const balances = transactions.reduce(
    (acc, t) => {
      acc[t.currency] += t.amount;
      return acc;
    },
    { COP: 0, USD: 0, EUR: 0 }
  );

  return (
    <div className="mt-4">
      <h2 className="font-bold mb-2">{t.balance}</h2>
      <ul>
        <li>COP: {balances.COP}</li>
        <li>USD: {balances.USD}</li>
        <li>EUR: {balances.EUR}</li>
      </ul>
    </div>
  );
};
