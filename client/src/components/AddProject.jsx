import React from "react";
import { useState } from "react";

const AddProject = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [demo, setDemo] = useState("");

  return (
    <div>
      <h2>Add Project Info</h2>
    </div>
  );
};

export default AddProject;
