import { usePapaParse } from "react-papaparse";

function tableResults(filename) {
  const { readRemoteFile } = usePapaParse();
//how to find time taken to execute this function

  return new Promise((resolve, reject) => {
    let res=[];
    readRemoteFile("https://react-papaparse.js.org/static/csv/normal.csv", {
     
    step: (results) => {
        console.log("Row:", results.data);
        res.push(results.data);
        return res;
      },

    complete: () => {
        console.log("Finished:", res);
        resolve(res);
      },
      worker: true,
      error: (error) => {
        console.error("Error parsing CSV:", error);
        reject(error);
      },
    });
  });
}

function tableResults2(filename) {
  //parse local file uploaded by user
  
}

export default tableResults;