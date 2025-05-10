import '../styles/Contact.css'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'


export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message envoyé ! 📬 (simulé)')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <Helmet>
          <html lang="fr" />
          <title>Contact – Portfolio de Lara O.</title>
          <meta
            name="description"
            content="Besoin de me contacter ? Remplissez ce formulaire pour discuter projets, missions ou collaborations avec [Ton Nom], développeur front-end."
          />
          <link rel="canonical" href="https://tonsite.netlify.app/contact" />
        </Helmet>
      <main className="contact">
        <div className="contact-container">
          <h1 className="contact-title">Contactez-moi</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Nom :
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email :
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message :
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </main>
    </>
  )
}