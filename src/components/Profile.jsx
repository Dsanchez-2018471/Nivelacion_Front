
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Obtener el perfil del usuario
        axios.get('/api/users/profile')
            .then(response => setProfile(response.data))
            .catch(error => console.error('Error al obtener perfil', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('/api/users/profile', profile)
            .then(response => setMessage('Perfil actualizado correctamente'))
            .catch(error => console.error('Error al actualizar perfil', error));
    };

    return (
        <div>
            <h2>Editar Perfil</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" value={profile.name || ''} onChange={handleChange} />
                </label>
                {/* Agrega más campos según sea necesario */}
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default Profile;
