import React from 'react';
import TableHead from "./TableHead";
import TableRow from './TableRow'
import IUser from "../IUser";

interface TableProps {
    values: IUser[],
    headers: string [],
}

const Table: React.FC<TableProps> = (props: TableProps) => {
    return (
        <div className='table-responsive text-nowrap '>
            <table className="table table-hover table-fixed table-bordered">
                <thead className='thead-light'>
                <TableHead headers={props.headers}/>
                </thead>
                <tbody>
                {props.values.map((item) => {
                    return <TableRow values={item} key={item.id}/>
                })}
                </tbody>

            </table>
        </div>
    );
};

export default Table
