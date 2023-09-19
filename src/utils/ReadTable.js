import { usePapaParse } from "react-papaparse";

function tableResults(link) {
  const { readRemoteFile } = usePapaParse();

  return new Promise((resolve, reject) => {
    let res = [];
    const time = performance.now();
    readRemoteFile(link, {
      download: true,
      complete: (resul) => {
        const time2 = performance.now();
        res = resul.data;
        const finalResult = {
          data: res,
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
