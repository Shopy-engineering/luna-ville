
/**
 * Format a number as currency (USD)
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

/**
 * Format a date to a readable string
 * @param dateStr - Date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Format a date with time
 * @param dateStr - Date string to format
 * @returns Formatted date and time string
 */
export const formatDateTime = (dateStr: string): string => {
  return new Date(dateStr).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Calculate rug price based on dimensions
 * @param length - Length of rug in feet
 * @param width - Width of rug in feet
 * @param basePrice - Base price per square foot
 * @returns Calculated price
 */
export const calculateRugPrice = (length: number, width: number, basePrice: number = 12): number => {
  // Calculate area in square feet
  const area = length * width;
  
  // Apply tiered pricing: larger rugs have slightly lower per-sq-ft costs
  let pricePerSqFt = basePrice;
  if (area > 80) {
    pricePerSqFt = basePrice * 0.85; // 15% discount for very large rugs
  } else if (area > 50) {
    pricePerSqFt = basePrice * 0.9; // 10% discount for large rugs
  }
  
  // Calculate total price
  return Math.round(area * pricePerSqFt);
};

