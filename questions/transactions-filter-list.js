function createDebounce() {
  let timer = null;

  return (callback, timeout = 500) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, timeout);
  };
}

function appendChildElement(elementList){
  let transactionsList = document.querySelector('ul#filtered-list')
  if(transactionsList){
    document.querySelectorAll('li').forEach(item => {
      if(item.parentNode === transactionsList) transactionsList.removeChild(item)
    })
  } else {
    transactionsList = document.createElement('ul')
    transactionsList.setAttribute('id', 'filtered-list')
    transactionsList.setAttribute('aria-label', 'transactions list')
    let content = document.querySelector('div#content')
    content.appendChild(transactionsList) 
  }
  transactionsList.setAttribute('style', 'height: 30rem; overflow-y: auto')

  elementList.forEach(transaction => {
  const li = document.createElement('li')
  li.setAttribute('aria-label', `transaction-${transaction.name||'not-found'}`)
  li.setAttribute('id', `transaction-${transaction.id}`)
  const span = document.createElement('span')
  span.textContent = transaction.description
  li.appendChild(span)
  transactionsList.appendChild(li)
})}

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

const debounce = createDebounce()
let inputValue = null
let filteredList = []

appendChildElement(transactions)

const inputElement = document.querySelector('input#search-field')
inputElement.addEventListener('keydown', (event) => {
  debounce(() => {
    inputValue = event.target.value
    filteredList = transactions.filter(item => 
      item
      .description
      .toLocaleLowerCase()
      .includes(inputValue.toLocaleLowerCase())
    )
    if(filteredList.length){
      appendChildElement(filteredList)
    } else {
      if(inputValue) {
        appendChildElement([{
          id: 1,
          description: 'Nenhum resultado',
        }])
      } else {
        appendChildElement(transactions)
      }
    }
  })
})

