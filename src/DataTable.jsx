import React, { useState } from 'react';
import data from './Data';
import filteredData from './FilteredData';
import DownloadCSV from './DownloadCsv';
import DownloadPDF from './DownloadPdf';

export default function DataTable() {
    const [selectedName, setSelectedName] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [search, setSearch] = useState('');

    const uniqueNames = [...new Set(data.map(user => user.name))];
    const uniqueAges = [...new Set(data.map(user => user.age))];

    const applyFilteredData = () => {
        return filteredData(selectedName, selectedAge, search)
    }

    return (
        <div className="p-4">
            <button onClick={() => DownloadCSV(selectedName, selectedAge, search)} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">
                Download CSV
            </button> {" "}
            <button onClick={() => DownloadPDF(selectedName, selectedAge, search)} className="bg-red-500 text-white px-4 py-2 rounded">
                Download PDF
            </button>
            <div> <select
                className="border px-3 py-2 rounded"
                value={selectedName}
                onChange={e => setSelectedName(e.target.value)}
            >
                <option value="">All Names</option>
                {uniqueNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>

                <select
                    className="border px-3 py-2 rounded"
                    value={selectedAge}
                    onChange={e => setSelectedAge(e.target.value)}
                >
                    <option value="">All Ages</option>
                    {uniqueAges.map(age => (
                        <option key={age} value={age}>{age}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search all fields..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded w-full md:w-64"
                />
                <button
                    onClick={() => {
                        setSelectedName('');
                        setSelectedAge('');
                        setSearch('');
                    }}
                    className="bg-gray-300 px-4 py-2 rounded"
                >
                    Reset Filters
                </button>
            </div>
            <h2 className="text-xl font-bold mb-4">User Table</h2>
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Age</th>
                        <th className="border px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {(selectedName || selectedAge || search) ?
                        applyFilteredData().length > 0 ? (
                            applyFilteredData().map(user => (
                                <tr key={user.id}>
                                    <td className="border px-4 py-2">{user.id}</td>
                                    <td className="border px-4 py-2">{user.name}</td>
                                    <td className="border px-4 py-2">{user.age}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No matching data found</td>
                            </tr>
                        ) : data.map(user => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.age}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
