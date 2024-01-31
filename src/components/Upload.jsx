import { useState } from "react";
// import * as XLSX from "xlsx";

function Upload() {
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  // const [excelData, setExcelData] = useState(null); //todo when viewing excel data
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        setExcelFile(selectedFile);
      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  // submit event
  // const handleFileSubmit = (e) => {
  //   e.preventDefault();
  //   if (excelFile !== null) {
  //     const workbook = XLSX.read(excelFile, { type: "buffer" });
  //     const worksheetName = workbook.SheetNames[0];
  //     const worksheet = workbook.Sheets[worksheetName];
  //     const data = XLSX.utils.sheet_to_json(worksheet);
  //     setExcelData(data.slice(0, 10));
  //   }
  // };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const fileName = excelFile.name;
      setUploadedFiles([...uploadedFiles, fileName]);
    }
  };

  return (
    <div className="wrapper">
      <h3>Upload & View Excel Sheets</h3>

      {/* form */}
      <form className="form-group custom-form" onSubmit={handleFileSubmit}>
        <input
          type="file"
          className="form-control"
          required
          onChange={handleFile}
        />
        <button
          type="submit"
          className="btn btn-success w-[6vw] rounded-md p-2 bg-blue-800 text-white btn-md"
        >
          UPLOAD
        </button>
        {typeError && (
          <div className="alert alert-danger" role="alert">
            {typeError}
          </div>
        )}
      </form>

      {/* view data */}
      {/* <div className="viewer">
        {excelData ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No File is uploaded yet!</div>
        )}
      </div> */}

      {/* view uploaded file names */}
      <div className="viewer">
        {uploadedFiles.length > 0 ? (
          <div className="table-responsive">
            <table className="table bg-blue-300 w-full mt-5">
              <thead>
                <tr>
                  <th className="text-xl font-bold">File Name</th>
                </tr>
              </thead>

              <tbody className="text-black mt-3">
                {uploadedFiles.map((fileName, index) => (
                  <tr key={index}>
                    <td className=" border-y-2 border-blue-700 p-2 text-lg tracking-wide">{fileName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No File is uploaded yet!</div>
        )}
      </div>
    </div>
  );
}

export default Upload;
