
import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('/api/users/password', { currentPassword, newPassword })
            .then(response => setMessage('Contraseña actualizada correctamente'))
            .catch(error => console.error('Error al cambiar la contraseña', error));
    };

    return (
        <div>
            <h2>Cambiar Contraseña</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Contraseña Actual:
                    <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                </label>
                <label>
                    Nueva Contraseña:
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </label>
                <button type="submit">Cambiar Contraseña</button>
            </form>
        </div>
    );
};

export default ChangePassword;
