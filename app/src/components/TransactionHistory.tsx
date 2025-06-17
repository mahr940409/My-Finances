import React, { useState } from 'react';
import { useFinance } from '../contexts/FinanceContext';
import { useLanguage } from '../contexts/LanguageContext';

const labels = {
  en: {
    filter: 'Filter by currency',
    date: 'Date',
    description: 'Description',
    amount: 'Amount',
    currency: 'Currency',
  },
  es: {
    filter: 'Filtrar por moneda',
    date: 'Fecha',
    description: 'Descripción',
    amount: 'Monto',
    currency: 'Moneda',
  },
};

export const TransactionHistory: React.FC = () => {
  const { transactions } = useFinance();
  const { lang } = useLanguage();
  const t = labels[lang];
  const [filter, setFilter] = useState('ALL');

  const filtered =
    filter === 'ALL' ? transactions : transactions.filter(t => t.currency === filter);

  return (
    <div>
      <select
        className="border p-1 mb-2"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="ALL">{t.filter}</option>
        <option value="COP">COP</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>{t.date}</th>
            <th>{t.description}</th>
            <th>{t.amount}</th>
            <th>{t.currency}</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(tran => (
            <tr key={tran.id}>
              <td>{tran.date}</td>
              <td>{tran.description}</td>
              <td>{tran.amount}</td>
              <td>{tran.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
