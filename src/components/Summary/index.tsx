import { useTransactions } from "../../context/TransactionContext";
import incomeImage from "../../assets/income.svg";
import outComeImage from "../../assets/outcome.svg";
import totalImage from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.typeTransaction === "income") {
        acc.incomes += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.expenses -= transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      incomes: 0,
      expenses: 0,
      total: 0
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="icone que representa a Entradas" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.incomes)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outComeImage} alt="icone que representa a Saidas" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.expenses)}
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImage} alt="icone que representa o Total" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
