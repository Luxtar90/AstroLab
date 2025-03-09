export const convertToLiters = (value: number, unit: string): number => {
    const units = { L: 1, mL: 1 / 1000, µL: 1 / 1000000 };
    return units[unit] ? value * units[unit] : value;
  };
  