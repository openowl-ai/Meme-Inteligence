import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface TrendingCoin {
  symbol: string;
  velocity: number;
  sentiment: number;
  price: number;
  priceChange24h: number;
}

export const TrendingCoins = () => {
  const { data, isLoading } = useQuery<TrendingCoin[]>({
    queryKey: ['trending-coins'],
    queryFn: async () => {
      const response = await fetch('/api/trending');
      return response.json();
    },
    refetchInterval: 30000 // Refresh every 30 seconds
  });

  if (isLoading) {
    return <div className="animate-pulse h-64 bg-gray-100 rounded-lg" />;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Trending Coins</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="symbol" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="velocity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
