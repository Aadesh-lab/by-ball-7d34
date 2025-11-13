import React from 'react';
import { DollarSign } from 'lucide-react';

const PriceTag = ({ price, size = 'medium', variant = 'default', className = '' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-lg';
      case 'medium':
        return 'text-xl';
      case 'large':
        return 'text-2xl';
      case 'extra-large':
        return 'text-3xl';
      default:
        return 'text-xl';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-green-600 bg-green-50 px-3 py-1 rounded-lg border border-green-200';
      case 'secondary':
        return 'text-green-700 bg-white px-3 py-1 rounded-lg border border-green-300 shadow-sm';
      case 'accent':
        return 'text-white bg-green-600 px-3 py-1 rounded-lg shadow-md';
      case 'minimal':
        return 'text-green-800';
      default:
        return 'text-green-700';
    }
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return price.toFixed(2);
    }
    return parseFloat(price).toFixed(2);
  };

  const baseClasses = `font-bold flex items-center ${getSizeClasses()} ${getVariantClasses()} ${className}`;

  return (
    <div className={baseClasses}>
      <span className="flex items-baseline">
        <span className="text-sm opacity-75 mr-1">$</span>
        <span>{formatPrice(price)}</span>
      </span>
    </div>
  );
};

export default PriceTag;