import { useState } from "react";
import "./App.css";
import Chat from "../src/components/chat/Chat";

function App() {
  const [count, setCount] = useState(0);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(""); // "uploading", "done", "failed"


  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadStatus(""); // Reset status when a new file is selected
  };

  
  // Handle file upload to API
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setUploading(true);
    setUploadStatus("uploading");


    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://www.backendpy.thefirstweb.com/api/v1/chat/pdf/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("done");
      } else {
        setUploadStatus("failed");      }
    } catch (error) {
      setUploadStatus("failed");
      alert("Error uploading file: " + error.message);
    }
    finally {
      setUploading(false);
    }
  };

  return (
    <>
<div className="flex justify-center items-center h-screen flex-col text-center px-4">
  <img src="logo.jpeg" alt="" className="w-[250px] md:w-[500px] h-auto" />
  <h1 className="text-[30px] md:text-[60px] mb-6 text-[#2E7D32] font-bold">
    Welcome to Uttarakhand Teaching Project 2025
  </h1>
  <Chat />
</div>

    </>
  );
}

export default App;



        {/* <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg w-96 text-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Upload Your PDF File
  </h2>
  <label className="cursor-pointer bg-white border border-gray-300 rounded-lg py-3 px-6 text-gray-700 shadow-sm hover:shadow-md transition-all duration-200">
    <input
      type="file"
      onChange={handleFileChange}
      accept=".pdf"
      className="hidden"
    />
    {file ? file.name : "Choose a file"}
  </label>
  <button
            onClick={handleFileUpload}
            disabled={uploading}
            className={`mt-4 px-6 py-2 rounded-lg text-white font-medium shadow-md transition-all duration-200 ${
              uploading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {uploading ? "Uploading..." : "Upload PDF"}
          </button>
          
          {uploadStatus === "uploading" && (
            <p className="text-yellow-500 text-sm mt-2">Uploading...</p>
          )}
          {uploadStatus === "done" && (
            <p className="text-green-600 text-sm mt-2">Upload successful!</p>
          )}
          {uploadStatus === "failed" && (
            <p className="text-red-600 text-sm mt-2">Upload failed. Try again.</p>
          )}</div> */}
