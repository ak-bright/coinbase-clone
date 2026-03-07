import { useState } from 'react';
import { CryptoRow } from '../components/crypto';
import { cryptoData } from '../data/cryptoData';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCryptos = cryptoData.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore crypto</h1>
        <p className="text-gray-600 mb-8">
          Browse prices, charts, and market data for hundreds of cryptocurrencies.
        </p>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search all assets"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052ff] focus:border-transparent"
          />
        </div>

        {/* Crypto Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-right">Price</th>
                <th className="py-3 px-4 text-right">24h Change</th>
                <th className="py-3 px-4 text-right">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {filteredCryptos.map((crypto, index) => (
                <CryptoRow key={crypto.id} crypto={crypto} index={index} />
              ))}
            </tbody>
          </table>
        </div>

        {filteredCryptos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No cryptocurrencies found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
