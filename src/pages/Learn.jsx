import { Card } from '../components/common';
import { learnArticles } from '../data/cryptoData';

const Learn = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn about crypto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your crypto journey with the basics. Easy-to-understand guides 
            and tutorials to help you navigate the world of cryptocurrency.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800"
                  alt="What is cryptocurrency?"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-[#0052ff] text-sm font-medium mb-2">Featured</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  What is cryptocurrency?
                </h2>
                <p className="text-gray-600 mb-4">
                  Cryptocurrency is a digital or virtual form of currency that uses 
                  cryptography for security. Learn the fundamentals and how it's 
                  changing the future of finance.
                </p>
                <span className="text-sm text-gray-500">10 min read</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learnArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="text-[#0052ff] text-xs font-medium">{article.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                <span className="text-xs text-gray-500">{article.readTime} read</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Topics */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Bitcoin', 'Ethereum', 'DeFi', 'NFTs', 'Trading', 'Security', 'Wallets', 'Staking'].map((topic) => (
              <div
                key={topic}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="font-medium text-gray-900">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
