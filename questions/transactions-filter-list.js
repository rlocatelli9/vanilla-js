const transactions = Array.from({ length: 5000 }, (_, i) => {
  const types = ['Pagamento', 'Transferência', 'Depósito', 'Estorno'];
  const categories = [
    'Alimentação', 'Transporte', 
    'Lazer', 'Saúde', 
    'Educação', 'Serviços'
  ];
  const names = [
    'Mercado Central', 'Posto Shell', 
    'Netflix', 'Farmácia Pague Menos', 
    'Uber', 'Amazon Prime', 
    'Restaurante Sabor', 'Academia Bio', 
    'Internet Fibra', 'Aluguel'
  ];
  
  return {
    id: i + 1,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
    description: names[Math.floor(Math.random() * names.length)],
    type: types[Math.floor(Math.random() * types.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    amount: parseFloat((Math.random() * 500 + 10).toFixed(2))
  };
});


