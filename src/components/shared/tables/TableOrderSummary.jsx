import React from 'react';

const TableOrderSummary = () => (
    <div className="table-responsive">
        <table className="table ps-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Produtos</th>
                    <th>Pagamento</th>
                    <th>Estado</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#A580</td>
                    <td>
                        <strong> Ago, 15, 2024</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Placas de gesso</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge success">Pago</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment success">
                            Entregue
                        </span>
                    </td>
                    <td>
                        <strong>12.00€</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Editar
                                </a>
                                <a className="dropdown-item" href="#">
                                    Excluir
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#B260</td>
                    <td>
                        <strong> Ago, 15, 2024</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Placas de gesso</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge gray">Pendente</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment success">
                            Entregue
                        </span>
                    </td>
                    <td>
                        <strong>12.00€</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A583</td>
                    <td>
                        <strong> Ago, 15, 2024</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Placas de gesso</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge success">Pago</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment warning">
                            em andamento
                        </span>
                    </td>
                    <td>
                        <strong>12.00€</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A583</td>
                    <td>
                        <strong> Ago, 15, 2024</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Placas de gesso</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge gray">Pendente</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment success">
                            Entregue
                        </span>
                    </td>
                    <td>
                        <strong>12.00€</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A112</td>
                    <td>
                        <strong> Ago, 15, 2024</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Placas de gesso</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge success">Pago</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment danger">Cancelar</span>
                    </td>
                    <td>
                        <strong>12.00€</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default TableOrderSummary;
