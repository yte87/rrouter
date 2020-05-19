import React from 'react';

const LoginPage = () => {
    return(
        <div>
            <label htmlfor="">Podaj Login <input type="text"/></label>
            <label htmlfor="">Podaj Haslo <input type="password"/></label>
            <button>Zaloguj</button>
        </div>
    );
}

export default LoginPage;