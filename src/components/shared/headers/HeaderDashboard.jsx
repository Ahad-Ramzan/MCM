import React from 'react';
import Link from 'next/link';
import FormHeaderSearch from '~/components/shared/forms/FormHeaderSearch';

const HeaderDashboard = ({
    title = 'Dashboard',
    description = 'Everything here',
}) => {
    return (
        <header className="header--dashboard">
            <div className="header__left">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="header__center">
                <FormHeaderSearch />
            </div>
            <div className="header__right">
                <Link href="/login" className="header__site-link">
                    <span>VER LOJA</span>
                    <i className="icon-exit-right"></i>
                </Link>
            </div>
        </header>
    );
};

export default HeaderDashboard;
