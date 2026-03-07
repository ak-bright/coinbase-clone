import { Link } from 'react-router-dom';
import Card from '../common/Card';

const CryptoCard = ({ crypto }) => {
  const { id, name, symbol, price, change24h, image } = crypto;
  const isPositive = change24h >= 0;

  return (
    <Link to={`/asset/${id}`}>
      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={image} alt={name} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500 uppercase">{symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-900">${price.toLocaleString()}</p>
            <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{change24h.toFixed(2)}%
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CryptoCard;
