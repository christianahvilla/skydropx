import React from 'react';
import CardItem from '../CardItem/CardItem';
import Pagination from '../Pagination/Pagination';
import './style.css';

const CardContainer = (props) => {
    const {
        items,
        page,
        total_pages,
        loadPage,
    } = props;

    return (
        <main className="section container">
            <div className="container-items">
                {items.map((item) => {
                    return <CardItem item={item} />;
                })}
            </div>
            <Pagination page={page} totalPages={total_pages} loadPage={loadPage} />
        </main>
    );
};

export default CardContainer;
