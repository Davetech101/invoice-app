import SInvoice from "@/styles/Invoice";
import NoInvoice from "./NoInvoice";

const Invoices = () => {
  const invoicesArray = [
    {
      id: "QW341e",
      name: "John Doe",
      date: "19 Aug 2023",
      amount: "1,800.00",
      status: "paid",
    },

    {
      id: "QW342e",
      name: "John Doe",
      date: "19 Aug 2023",
      amount: "1,800.00",
      status: "pending",
    },

    {
      id: "QW343e",
      name: "John Doe",
      date: "19 Aug 2023",
      amount: "1,800.00",
      status: "pending",
    },

    {
      id: "QW344e",
      name: "John Doe",
      date: "19 Aug 2023",
      amount: "1,800.00",
      status: "paid",
    },

    {
      id: "QW345e",
      name: "John Doe",
      date: "19 Aug 2023",
      amount: "1,800.00",
      status: "pending",
    },

    {
      id: "QW346e",
      name: "John Doe",
      date: "19 Aug 2023",
      amount: "1,800.00",
      status: "draft",
    },
  ];

  const invoices = invoicesArray.map((invoice) => {
    let status = invoice.status;
    return (
      <div key={invoice.id} className="invoice">
        <div className="head">
          <h3>
            <span className="hash" id="">
              #
            </span>{" "}
            <span>{invoice.id}</span>
          </h3>

          <p>{invoice.name}</p>
        </div>

        <div className="btm">
          <div className="left">
            <div className="date">Due {invoice.date}</div>

            <div className="amt">£ {invoice.amount}</div>
          </div>

          <div
            className="status"
            style={{
              color:
                invoice.status === "paid"
                  ? "#33D69F"
                  : invoice.status === "pending"
                  ? "#FF8F00"
                  : "#565656",

              background:
                invoice.status === "paid"
                  ? "rgb(51 214 159 / 7%)"
                  : invoice.status === "pending"
                  ? "rgb(255 143 0 / 7%)"
                  : "#0000001c",
            }}
          >
            <div
              className="dot"
              style={{
                background:
                  invoice.status === "paid"
                    ? "#33D69F"
                    : invoice.status === "pending"
                    ? "#FF8F00"
                    : "#565656",
              }}
            ></div>
            {invoice.status}
          </div>
        </div>
      </div>
    );
  });

  return (
    <SInvoice>
      {invoicesArray.length === 0 ? (
        <div className="noInvoice">
          <NoInvoice />

          <div className="txt">
            <h4>There is nothing here</h4>

            <p>
              Create an invoiceby clicking the <br /> <span>New</span> button
              and get started
            </p>
          </div>
        </div>
      ) : (
        <div className="invoices">{invoices}</div>
      )}
    </SInvoice>
  );
};

export default Invoices;
