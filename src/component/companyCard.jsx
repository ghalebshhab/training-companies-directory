import '../component/Company.css';

function CompanyCard({ company }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '8px',
        background: '#f9f9f9'
        
      }} className='card'>
        <h3>{company.name}</h3>
        <p><strong>City:</strong> {company.city}</p>
        <p><strong>Category:</strong> {company.category}</p>
        <p>{company.description}</p>
        <a href={company.website} target="_blank" rel="noreferrer" title={company.name}>
          Visit Website
        </a>
      </div>
    );
  }
  
  export default CompanyCard;
  