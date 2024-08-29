// Archivo: src/components/ProfileEdit.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    profilePicture: ''
  });

  useEffect(() => {
    // Obtener la información del perfil al cargar el componente
    const fetchProfile = async () => {
      const res = await axios.get('/api/user/profile');
      setProfile(res.data);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Actualizar la información del perfil
    await axios.put('/api/user/profile', profile);
    alert('Perfil actualizado con éxito');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Profile Picture URL</label>
        <input
          type="text"
          name="profilePicture"
          value={profile.profilePicture}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default ProfileEdit;
