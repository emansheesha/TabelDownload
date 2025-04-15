import filteredData from "./FilteredData";

const DownloadCSV = (selectedName, selectedAge, search) => {
    console.log('filteredData',filteredData);
    const headers = ['ID,Name,Age,Email'];
    const rows = filteredData(selectedName, selectedAge, search).map(user =>
      [user.id, user.name, user.age, user.email].join(',')
    );
    const csvContent = [headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'users.csv');
    link.click();
  };
export default DownloadCSV;