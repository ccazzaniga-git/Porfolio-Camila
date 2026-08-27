'use client'

import { useState } from "react";

export default function ContactoForm({ postUrl }) {

      const initialForm = {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
      }

      const [sending, setSending] = useState(false);
      const [msg, setMsg] = useState('');
      const [formData, setFormData] = useState(initialForm);

      const handleChange = e => {
            const { name, value } = e.target;
            setFormData(oldData => ({
                  ...oldData,
                  [name]: value
            }));
      }

      const handleSubmit = async e => {
            e.preventDefault();

            setMsg('');
            setSending(true)

            try {
                  const rawResponse = await fetch(postUrl, {
                        method: 'POST',
                        headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                  });

                  const response = await rawResponse.json();

                  if (!rawResponse.ok) {
                        throw new Error(
                              response.message || 'No se pudo enviar el mensaje'
                        );
                  }

                  setMsg(response.message);

                  if (response.error === false) {
                        setFormData(initialForm);
                  }

            } catch (error) {
                  console.error('Error al enviar el formulario:', error);

                  setMsg(
                        error.message || 'Error al enviar el mensaje. Intentá nuevamente.'
                  );

            } finally {
                  setSending(false);
            }
      }
      return (
            <>
                  <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                        <p>
                              <label>Nombre</label>
                              <input type="text" name="nombre" value={formData.nombre}
                                    onChange={handleChange} />
                        </p>
                        <p>
                              <label>Email</label>
                              <input type="text" name="email" value={formData.email}
                                    onChange={handleChange} />
                        </p>
                        <p>
                              <label>Teléfono</label>
                              <input type="text" name="telefono" value={formData.telefono}
                                    onChange={handleChange} />
                        </p>
                        <p>
                              <label>Comentario</label>
                              <textarea name="mensaje" value={formData.mensaje}
                                    onChange={handleChange}></textarea>
                        </p>

                        <p className="centrar"><input type="submit" value="Enviar" /></p>

                  </form >

                  {sending ? <p>Enviando...</p> : null}
                  {msg ? <p>{msg}</p> : null}
            </>
      )
}