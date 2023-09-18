import { usePapaParse } from "react-papaparse";

function tableResults(link) {
  const { readRemoteFile } = usePapaParse();
  //how to find time taken to execute this function

  return new Promise((resolve, reject) => {
    let res = [];
    const time = performance.now();
    readRemoteFile(
      link,
      {
        step: (results) => {
          res.push(results.data);
        },

        complete: () => {
          const time2 = performance.now();
          const finalResult={
            data:res,
            time:time2-time
          }
          resolve(finalResult);
        },
        worker: true,
        error: (error) => {
          console.error("Error parsing CSV:", error);
          reject(error);
        },
      }
    );
  });
}

function tableResults2(filename) {
  //parse local file uploaded by user
}

export default tableResults;
