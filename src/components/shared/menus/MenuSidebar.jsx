import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MenuSidebar = () => {
    const router = useRouter();
    const menuItems = [
        {
            text: 'Dashboard',
            url: '/',
            icon: 'icon-home',
        },
        {
            text: 'Produtos',
            url: '/products',
            icon: 'icon-database',
        },
        {
            text: 'Encomendas',
            url: '/orders',
            icon: 'icon-bag2',
        },
        {
            text: 'Clientes',
            url: '/customers',
            icon: 'icon-users2',
        },
        {
            text: 'Categorias',
            url: '/categories',
            icon: 'icon-users2',
        },
        {
            text: 'Settings',
            url: '/settings',
            icon: 'icon-cog',
        },
        {
            url: '/settings/bitrix24',
            image: '/img/Bitrix24.png',
        },
    ];

    return (
        <ul className="menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    style={item.image ? { 
                        position: 'absolute', 
                        top: "200px", 
                        left: "1px", 
                        border: 'none',
                        width: '100%',
                        height: '40px',
                        pointerEvents: 'none'
                    } : {}}
                    className={router.pathname === item.url ? 'active' : ''}>
                    <Link 
                        href={item.url} 
                        className={item.image ? 'no-hover' : ''}
                        style={item.image ? { 
                            paddingLeft: '28px', 
                            border: 'none',
                            pointerEvents: 'none'
                        } : {}}
                    >
                        {item.image ? (
                            <img 
                                src={item.image} 
                                alt="Bitrix24"
                                style={{
                                    maxWidth: '120px',
                                    pointerEvents: 'none'
                                }}
                            />
                        ) : (
                            <>
                                <i className={item.icon}></i>
                                {item.text}
                            </>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MenuSidebar;
