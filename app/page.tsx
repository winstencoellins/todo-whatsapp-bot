'use client'

import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const response = await fetch('/api/todos')

    if (!response.ok) throw new Error('Something went wrong. Please try again.')

    const data = await response.json()

    setTodos(data)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    if (formData.get('task') == '') {
      setMessage('Should not be empty.')
      return
    }

    const response = await fetch('/api/todos', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      window.location.reload()
    }
  }

  return (
    <div>
      <div>{message}</div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter to dos ..." />
        <button type="submit">Add task</button>
      </form>

      <div>
        {
          todos.map((todo: any, index: number) => (
            <p key={index}>{index + 1}. {todo.task}</p>
          ))
        }
      </div>
    </div>
  );
}
