import { usePapaParse } from "react-papaparse";

function tableResults(link) {
  const { readRemoteFile } = usePapaParse();
  //how to find time taken to execute this function

  return new Promise((resolve, reject) => {
    let res = [];
    const time = performance.now();
    readRemoteFile(link, {
      complete: (resul) => {
        const time2 = performance.now();
        res = resul.data;
        const finalResult = {
          data: res,
          //round to 3 decimal places
          time: (time2 - time).toFixed(3),
        };
        resolve(finalResult);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
        reject(error);
      },
    });
  });
}

export default tableResults;
