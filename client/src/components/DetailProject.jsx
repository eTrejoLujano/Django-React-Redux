import React from "react";
import { useParams } from "react-router-dom";

export const DetailProject = () => {
  const { id } = useParams();
  return <div>Detail Project id: {id}</div>;
};
