import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website",
          typeTransaction: "income",
          amount: 12000,
          category: "Developer",
          createdAt: new Date()
        },
        {
          id: 2,
          title: "Computador",
          typeTransaction: "expense",
          amount: 1000,
          category: "Compras",
          createdAt: new Date()
        }
      ]
    });
  },

  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transaction", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
