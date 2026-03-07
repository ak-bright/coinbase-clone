import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/common';
import { cryptoData } from '../data/cryptoData';

const AssetDetail = () => {
  const { id } = useParams();
  const crypto = cryptoData.find((c) => c.id === id);

  if (!crypto) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Asset not found</h1>
          <Link to="/explore">
            <Button variant="primary">Back to Explore</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isPositive = crypto.change24h >= 0;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <img src={crypto.image} alt={crypto.name} className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{crypto.name}</h1>
            <span className="text-gray-500 uppercase">{crypto.symbol}</span>
          </div>
        </div>

        {/* Price Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-500 mb-1">{crypto.name} price</p>
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${crypto.price.toLocaleString()}
                </span>
                <span className={`text-lg ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {isPositive ? '+' : ''}{crypto.change24h.toFixed(2)}%
                </span>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-8">
              <p className="text-gray-500">Price chart would go here</p>
            </div>

            {/* About */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">About {crypto.name}</h2>
              <p className="text-gray-600 leading-relaxed">{crypto.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Market stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Market cap</span>
                  <span className="font-medium">${(crypto.marketCap / 1e9).toFixed(2)}B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Volume (24h)</span>
                  <span className="font-medium">${(crypto.volume24h / 1e9).toFixed(2)}B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">24h change</span>
                  <span className={`font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositive ? '+' : ''}{crypto.change24h.toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to="/signup">
                  <Button variant="primary" className="w-full">
                    Buy {crypto.symbol}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetail;
