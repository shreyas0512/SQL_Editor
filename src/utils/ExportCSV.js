
import { jsonToCSV } from 'react-papaparse';

const exportCSV=(csvData)=>{
    jsonToCSV(csvData, (err, csv) => {
        if (err) {
            console.log(err);
            return;
        }
        const link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        link.target = '_blank';
        link.download = 'my-file.csv';
        link.click();
    });

}

export default exportCSV;