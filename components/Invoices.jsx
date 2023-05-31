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
    return (
      <div key={invoice.id} className="invoice">
        <div className="head">
          <h3>
            <span className="#" id="">
              #
            </span>{" "}
            <span>{invoice.id}</span>
          </h3>

          <strong>{invoice.name}</strong>
        </div>

        <div className="">
          <div className="left">
            <div className="date">Due {invoice.date}</div>

            <div className="amount">£ {invoice.amount}</div>
          </div>

          <div className="status">{invoice.status}</div>
        </div>
      </div>
    );
  });

  return (
    <SInvoice>
      <div className="noInvoice">
        <NoInvoice />

        <div className="txt">
          <h4>There is nothing here</h4>

          <p>
            Create an invoiceby clicking the <br /> <span>New</span> button and
            get started
          </p>
        </div>
      </div>
    </SInvoice>
  );
};

export default Invoices;
