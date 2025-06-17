import React, { useState } from 'react';
import { useFinance, Currency } from '../contexts/FinanceContext';
import { useLanguage } from '../contexts/LanguageContext';

const labels = {
  en: {
    description: 'Description',
    amount: 'Amount',
    date: 'Date',
    currency: 'Currency',
    add: 'Add',
  },
  es: {
    description: 'Descripción',
    amount: 'Monto',
    date: 'Fecha',
    currency: 'Moneda',
    add: 'Agregar',
  },
};

export const TransactionForm: React.FC = () => {
  const { addTransaction } = useFinance();
  const { lang } = useLanguage();
  const t = labels[lang];

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>('COP');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !date) return;
    addTransaction({ description, amount, date, currency });
    setDescription('');
    setAmount(0);
    setDate('');
  };

  return (
    <form onSubmit={submit} className="space-y-2">
      <input
        className="border p-1 w-full"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder={t.description}
      />
      <input
        className="border p-1 w-full"
        type="number"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        placeholder={t.amount}
      />
      <input
        className="border p-1 w-full"
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <select
        className="border p-1 w-full"
        value={currency}
        onChange={e => setCurrency(e.target.value as Currency)}
      >
        <option value="COP">COP</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <button className="bg-blue-500 text-white px-2 py-1" type="submit">
        {t.add}
      </button>
    </form>
  );
};
