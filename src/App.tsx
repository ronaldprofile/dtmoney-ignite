import { useState } from "react";
import { TransactionsProvider } from "./context/TransactionContext";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyles } from "./styles/Global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyles />
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
    </TransactionsProvider>
  );
}
