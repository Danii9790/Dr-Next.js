"use client";
import { createContext, useContext, useState } from "react";

const SupportAgentContext = createContext({
  open: false,
  toggle: () => {},
  openAgent: () => {},
  closeAgent: () => {},
});

export const SupportAgentProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const openAgent = () => setOpen(true);
  const closeAgent = () => setOpen(false);

  return (
    <SupportAgentContext.Provider value={{ open, toggle, openAgent, closeAgent }}>
      {children}
    </SupportAgentContext.Provider>
  );
};

export const useSupportAgent = () => useContext(SupportAgentContext);
