// pages/admin/soldproperties.tsx
import { useState } from "react";
import axios from "axios";

const AdminSoldProperties = () => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/soldproperties`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Uploaded successfully");
      setFile(null);
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Upload Sold Property</h1>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-2" />
      <textarea
        placeholder="Enter description"
        className="w-full border p-2 mb-4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default AdminSoldProperties;
