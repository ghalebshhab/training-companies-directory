import React, { useState, useEffect } from 'react';
import companies from '../Data/companies.json';
import CompanyCard from '../component/companyCard';
import '../pages/Directory.css';
function Directory() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }} className='directory-container'>
      <h2>Training Companies in Jordan</h2>
      <input
        className='search-input'
        type="text"
        placeholder="Search by name or city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />

      {filteredCompanies.map(company => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}

export default Directory;