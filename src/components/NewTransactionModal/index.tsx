import { FormEvent, useState } from "react";
import { useTransactions } from "../../context/TransactionContext";
import Modal from "react-modal";

import incomeImage from "../../assets/income.svg";
import outComeImage from "../../assets/outcome.svg";
import closeImage from "../../assets/close.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("income");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (!title || !amount || !category || !typeTransaction) {
      alert("Preencha todos os campos");
      return;
    }

    await createTransaction({
      title: title,
      amount: amount,
      category: category,
      typeTransaction: typeTransaction
    });

    onRequestClose();
    setTitle("");
    setAmount(0);
    setTypeTransaction("income");
    setCategory("");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="reactModalOverlay"
      className="reactModalContent"
    >
      <button
        type="button"
        className="buttonCloseModal"
        onClick={onRequestClose}
        title="fechar modal"
      >
        <img src={closeImage} alt="icone fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          name="title"
          title="Nome da sua transação"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          name="amount"
          title="valor da sua transação"
          value={amount}
          onChange={event => setAmount(+event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setTypeTransaction("income")}
            isActive={typeTransaction === "income"}
            activeColor={"green"}
          >
            <img src={incomeImage} alt="icone que representa a Entradas" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setTypeTransaction("expense")}
            isActive={typeTransaction === "expense"}
            activeColor={"red"}
          >
            <img src={outComeImage} alt="icone que representa a Saidas" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          name="category"
          title="Categoria da sua transação"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
