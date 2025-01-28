import { useEffect, useState } from 'react';
import { getExampleData } from '../services/api';

const Example = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getExampleData().then(setData);
    }, []);

    return (
        <div>
            <h1>Example Component</h1>
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default Example;
