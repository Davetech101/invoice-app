import SInvoice from "@/styles/Invoice";
import NoInvoice from "./NoInvoice";

const Invoices = () => {
  return (
    <SInvoice>
        <NoInvoice />

        <div className="txt">
          <h4>There is nothing here</h4>

            <p>
                Create an invoiceby clicking the <br /> <span>New</span> button and get started
            </p>
        </div>
    </SInvoice>
  );
};

export default Invoices;
