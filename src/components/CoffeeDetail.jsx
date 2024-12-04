import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeDetail = () => {
    const data = useLoaderData();
    console.log(data)
    const param = useParams();
    console.log(param.id)
    return (
        <div>
            Details data are here !
        </div>
    );
};

export default CoffeDetail;