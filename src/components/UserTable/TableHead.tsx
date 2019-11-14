import React from 'react';

interface IHeadProps {
    headers: string[],
}

const TableHead: React.FC<IHeadProps> = (props: IHeadProps) => {
    return (
        <tr>
            {props.headers.map((item, index) => {
                return (
                    <th key={index} className="text-center">{item} </th>)
            })}
            <th className="text-center">Редактирование</th>
        </tr>
    )
};

export default TableHead
