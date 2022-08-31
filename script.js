const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
      for (let elem in this.items) {
        this.print(elem)
      }
    },
  
    add: function(text) {
      this.items.push({
        'text': text, 'completed': false
      })
    },
  
    remove: function(index) {
      this.items.splice(index, 1)
    },
  
    print: function(index) {
      this.items[index].completed === true ?
        (this.items[index].text = '[x] ' + this.items[index].text):
        (this.items[index].text = '[ ] ' + this.items[index].text) 
      console.log(this.items[index].text)
    },
  
    complete: function(index) {
      this.items[index].completed = true
    },
  };