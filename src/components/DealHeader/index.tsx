import React from "react";
import DealCustomerHeader from "../CustomerDealHeader";
import styles from "./styles.module.css";

interface DealHeaderProps {
  onEdit?: () => void;
  onChat?: () => void;
  onAdvance?: () => void;
  onMenu?: () => void;
  width?: number | string;
}

export default function DealHeader({
  onEdit = () => console.log("Edit customer details"),
  onChat = () => console.log("Chat with customer"),
  onAdvance = () => console.log("Advance deal"),
  onMenu = () => console.log("Open menu"),
  width
}: DealHeaderProps) {
  return (
    <div className={styles.container} style={width ? { maxWidth: width } : undefined}>
      <DealCustomerHeader 
        onEdit={onEdit}
        onChat={onChat}
        onAdvance={onAdvance}
        onMenu={onMenu}
      />
    </div>
  );
} 