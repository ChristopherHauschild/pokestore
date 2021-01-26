export const toCurrency = value => {
  const formatted = parseFloat(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return `R$ ${formatted}`;
};

export const toPlots = (value, plots) => {
  const plotsValue = Math.round(value / plots);
  const formattedPlots = parseFloat(plotsValue).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return `${plots}x de R$ ${formattedPlots}`;
};
