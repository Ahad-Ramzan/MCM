import React from 'react';

const FooterCopyright = () => {
    return (
        <div className="ps-copyright">
            <img 
                src="/img/logo.png" 
                alt="MCM Logo" 
                style={{ maxWidth: '120px', marginBottom: '10px' }}
            />
            <p>
                &copy;2025 MCM Construções. Todos os <br /> direitos reservados.
            </p>
        </div>
    );
};

export default FooterCopyright;
