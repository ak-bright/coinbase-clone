import { Link } from 'react-router-dom';

const CryptoRow = ({ crypto, index }) => {
  const { id, name, symbol, price, change24h, marketCap, image } = crypto;
  const isPositive = change24h >= 0;

  return (
    <Link to={`/asset/${id}`}>
      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
        <td className="py-4 px-4 text-gray-500">{index + 1}</td>
        <td className="py-4 px-4">
          <div className="flex items-center space-x-3">
            <img src={image} alt={name} className="w-8 h-8 rounded-full" />
            <div>
              <span className="font-medium text-gray-900">{name}</span>
              <span className="text-gray-500 ml-2 uppercase text-sm">{symbol}</span>
            </div>
          </div>
        </td>
        <td className="py-4 px-4 text-right font-medium text-gray-900">
          ${price.toLocaleString()}
        </td>
        <td className={`py-4 px-4 text-right ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change24h.toFixed(2)}%
        </td>
        <td className="py-4 px-4 text-right text-gray-600">
          ${(marketCap / 1e9).toFixed(2)}B
        </td>
      </tr>
    </Link>
  );
};

export default CryptoRow;
