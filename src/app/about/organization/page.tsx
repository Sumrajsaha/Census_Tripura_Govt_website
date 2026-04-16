export default function OrganizationPage() {
  const employees = [
    { sno: 1, name: "Shri Ratan Biswas, IAS", designation: "Director" },
    { sno: 2, name: "Shri Prosenjit Nath Choudhury", designation: "Deputy Registrar General" },
    { sno: 3, name: "Shri Sukla Kanta Sarkar", designation: "Deputy Director" },
    { sno: 4, name: "Smt. Luna Tamuly", designation: "Assistant Director (T)" },
    { sno: 5, name: "Shri Subijit Deb Ray", designation: "Assistant Director (T)" },
    { sno: 6, name: "Smt. Uma Das", designation: "Statistical Investigator Grade-I" },
    { sno: 7, name: "Shri Bidyut Das", designation: "Statistical Investigator Grade-I" },
    { sno: 8, name: "Smt. Madhumita Choudhuri", designation: "Statistical Investigator Grade-I" },
    { sno: 9, name: "Shri Arun Pratap Mishra", designation: "Senior Geographer" },
    { sno: 10, name: "Shri Swapan Sarkar", designation: "Office Superintendent" },
    { sno: 11, name: "Shri Ajay Shukla", designation: "Statistical Investigator Grade-II" },
    { sno: 12, name: "Shri Pratap Dey", designation: "Statistical Investigator Grade-II" },
    { sno: 13, name: "Shri Monojit Kumar Paul", designation: "Statistical Investigator Grade-II" },
    { sno: 14, name: "Shri Subhadeep Raha", designation: "Statistical Investigator Grade-II" },
    { sno: 15, name: "Shri Yash Chaurasiya", designation: "Statistical Investigator Grade-II" },
    { sno: 16, name: "Shri Hrishi Sogarwal", designation: "Statistical Investigator Grade-II" },
    { sno: 17, name: "Shri Rajeshwar Singha", designation: "Statistical Investigator Grade-II" },
    { sno: 18, name: "Shri Arupula Harshavardhan", designation: "Statistical Investigator Grade-II" },
    { sno: 19, name: "Shri Murlidhar", designation: "Statistical Investigator Grade-II" },
    { sno: 20, name: "Shri Rahul Das", designation: "Statistical Investigator Grade-II" },
    { sno: 21, name: "Shri Dulal Rudra", designation: "Multi Tasking Staff" },
    { sno: 22, name: "Shri Chinmoy Nath", designation: "Multi Tasking Staff" },
    { sno: 23, name: "Shri Mahesh Dhanuk", designation: "Multi Tasking Staff" },
    { sno: 24, name: "Smt. Sandhya Rani Deb Barma", designation: "Multi Tasking Staff" },
    { sno: 25, name: "Shri Sourav Kumar", designation: "Multi Tasking Staff" },
    { sno: 26, name: "Shri Deepak Kumar", designation: "Multi Tasking Staff" },
    { sno: 27, name: "Shri Bijoy Kumar Ghosh", designation: "Canteen Attendant" },
    { sno: 28, name: "Smt. Trisha Nath", designation: "Canteen Attendant" },
    { sno: 29, name: "Shri Amalendu Das", designation: "Canteen Attendant" }
  ];

  return (
    <div className="container" style={{ padding: '60px 24px', minHeight: '60vh' }}>
      <div className="premium-card" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>Organization Framework</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '0 auto 20px' }}></div>
          <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Directory of Officials and Employees at the Directorate of Census Operations, Tripura.
          </p>
        </div>

        <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '16px 20px', fontWeight: '600', width: '80px', borderTopLeftRadius: '8px' }}>S. No.</th>
                <th style={{ padding: '16px 20px', fontWeight: '600' }}>Name of the Employee</th>
                <th style={{ padding: '16px 20px', fontWeight: '600', borderTopRightRadius: '8px' }}>Designation</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={emp.sno} className="circular-row" style={{ borderBottom: index === employees.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{emp.sno}</td>
                  <td style={{ padding: '14px 20px', fontWeight: '500', color: 'var(--text-dark)' }}>{emp.name}</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>{emp.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
