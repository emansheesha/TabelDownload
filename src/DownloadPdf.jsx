import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import filteredData from './FilteredData';

const DownloadPDF = (selectedName, selectedAge, search)=> {
    console.log('filteredData',filteredData);
    const doc = new jsPDF();
    const tableColumn = ['ID', 'Name', 'Age', 'Email'];
    const tableRows = filteredData(selectedName, selectedAge, search).map(user => [
      user.id,
      user.name,
      user.age,
      user.email,
    ]);
  
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
  
    doc.save('users.pdf');
  };
  
export default DownloadPDF;