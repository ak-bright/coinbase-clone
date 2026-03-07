import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../components/common';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes - handle auth logic here
    console.log('Sign up:', formData);
    alert('Sign up functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="text-3xl font-bold text-[#0052ff]">coinbase</Link>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Create your account
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Get started with the easiest crypto platform
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="firstName"
                label="First name"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="lastName"
                label="Last name"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="text-sm text-gray-600">
              <label className="flex items-start">
                <input type="checkbox" className="mr-2 mt-1 rounded" required />
                <span>
                  I certify that I am 18 years of age or older, and I agree to the{' '}
                  <a href="#" className="text-[#0052ff] hover:underline">User Agreement</a>
                  {' '}and{' '}
                  <a href="#" className="text-[#0052ff] hover:underline">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Create account
            </Button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-[#0052ff] hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
