import React, { useState } from 'react'

type Props = {
  onSubmit: (form: { name: string; description: string }) => void
}

function MyForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  })

  const { name, description } = form

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit(form)
    setForm({
      name: '',
      description: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={handleChange} type="text" />
      <input
        name="description"
        value={description}
        onChange={handleChange}
        type="text"
      />
      <button type="submit">등록</button>
    </form>
  )
}

export default MyForm
