export const convertToLiters = (value: number, unit: string): number => {
    switch (unit.toLowerCase()) {
      case "l": return value;
      case "ml": return value / 1000;
      case "µl": return value / 1000000;
      case "dl": return value / 10;
      case "cl": return value / 100;
      default: return value;
    }
  };
  
  export const validateNumber = (value: string): boolean => {
    if (!value || value.trim() === "") return false;
    const num = parseFloat(value);
    return !isNaN(num) && num > 0 && isFinite(num);
  };
  