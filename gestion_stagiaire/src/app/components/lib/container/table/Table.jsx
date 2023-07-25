import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

/**
 * Generic component for a simple table
 *
 * @param {object} data: REQUIRED: containing the column information and the rows information
 * @param {function} onSort: REQUIRED if sortable is used - function to call when the sort is triggered
 * 
 * @example:
    <Table
        data={{
            column: [{ name: 'Name' },{ name: 'Title' }],
            rows: [{name: 'Jane Cooper', title: 'Regional Paradigm Technician'],
        }}
    />
 * @author Peter Mollet
 */
const Table = ({ data: { column, rows }, onSort }) => {
    return (
        <div className="flex flex-col">
            <div
                className="overflow-x-auto pb-1 scrollbar-thin scrollbar-track-primary-lighter 
                scrollbar-thumb-primary-dark scrollbar-track-rounded-md scrollbar-thumb-rounded-md"
            >
                <div className="inline-block min-w-full px-1 py-2 align-middle">
                    <div className="overflow-hidden border-b border-gray-200 shadow dark:border-gray-800 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                            <THeader column={column} onSort={onSort} />
                            <TBody rows={rows} />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;

Table.propTypes = {
    data: PropTypes.shape({
        column: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                sortable: PropTypes.bool,
            }),
        ).isRequired,
        rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    onSort: PropTypes.func,
};

const THeader = ({ column, onSort }) => {
    return (
        <thead className="bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr>
                {column.map((data, index) => (
                    <Th data={data} key={index} onSort={onSort} />
                ))}
            </tr>
        </thead>
    );
};

const Th = ({ data, onSort }) => {
    const sorted = data.sortable;
    const [sort, setSort] = useState('');

    const handleSort = () => {
        if (sort === 'asc') setSort('desc');
        else if (sort === 'desc') setSort('asc');
        else setSort('desc');
    };

    useEffect(() => {
        if (sorted && data.name && sort) onSort({ name: data.name, direction: sort });
    }, [sort]);

    return (
        <th
            scope="col"
            className="relative px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
        >
            {sorted && data.name && (
                <button
                    className={`absolute left-3 
                    ${sort === 'asc' && 'rotate-180 transform'}`}
                    onClick={handleSort}
                >
                    <ChevronDownIcon className="h-3 w-3" />
                </button>
            )}
            {data.label}
        </th>
    );
};

const TBody = ({ rows }) => {
    return (
        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-700">
            {rows.map((row, index) => (
                <TRow row={row} key={index} />
            ))}
        </tbody>
    );
};

const TRow = ({ row }) => {
    return (
        <tr>
            {Object.keys(row).map((data, index) => (
                <Td data={row[data]} key={index} />
            ))}
        </tr>
    );
};

const Td = ({ data }) => {
    return (
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
            {data}
        </td>
    );
};
