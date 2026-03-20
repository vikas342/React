import React from "react";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function AddCar({ children, onClose }: Props) {
  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
const overlay = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
};
