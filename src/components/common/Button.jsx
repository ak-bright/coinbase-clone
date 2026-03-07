const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'font-medium rounded-full transition-colors duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-[#0052ff] text-white hover:bg-[#0041cc]',
    secondary: 'bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100',
    dark: 'bg-gray-900 text-white hover:bg-gray-800',
    white: 'bg-white text-gray-900 hover:bg-gray-100',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
