import { MainLayout } from '../components/Layout/MainLayout';
import { BacktestForm } from '../components/Backtesting/BacktestForm';
import { BacktestResults } from '../components/Backtesting/BacktestResults';
import { useState } from 'react';

export default function Backtest() {
  const [results, setResults] = useState(null);

  return (
    <MainLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-8">Backtest</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BacktestForm onSubmit={setResults} />
          {results && <BacktestResults results={results} />}
        </div>
      </div>
    </MainLayout>
  );
}
