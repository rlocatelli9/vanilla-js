const lessons = [
  {
    question: `We have a list with 5k finance transaction that need to filter real-time 
    while the user type in search field. 
    How to handle the rendering peformance and the event management for avoid the
    freeze the interface?`,
    answer: `./questions/transactions-filter.html`,
  },
]

document.addEventListener('DOMContentLoaded', () => {

  const content = document.querySelector('div#content')
  if(!content) return 
  
  const questionsList = document.createElement('ul')
  questionsList.setAttribute('id', 'questions-list')

  if(questionsList){
    lessons.forEach((lesson, index) =>{ 
      const li = document.createElement('li')
      li.setAttribute('id', 'question-'+(index+1))
      li.textContent = lesson.question
      const link = document.createElement('a')
      link.target= '_blank'
      link.rel = 'noopener'
      link.href = lesson.answer
      link.textContent = 'Resposta'
      const newLine = document.createElement('br')
      li.appendChild(newLine)
      li.appendChild(link)
      questionsList.appendChild(li)
      
    })
  }

  content.appendChild(questionsList)

})