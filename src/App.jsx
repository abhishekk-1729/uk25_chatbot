import { useState } from "react";
import "./App.css";
import Chat from "../src/components/chat/Chat";

function App() {
  const [count, setCount] = useState(0);
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload to API
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://www.backendpy.thefirstweb.com/api/v1/chat/pdf/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("File upload failed!");
      }
    } catch (error) {
      alert("Error uploading file: " + error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-[60px] mb-6">
          Welcome to Uttarakhand Teaching Project 2025{" "}
        </h1>
        <Chat />
        <div className="mt-6">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="mb-4"
          />
          <button
            onClick={handleFileUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Upload PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
