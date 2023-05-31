/* eslint-disable react/no-unescaped-entities */
import SInvoiceForm from "@/styles/styled-components/InvoiceForm";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const InvoiceForm = () => {
  return (
    <SInvoiceForm>
      <div className="container">
        <button className="back">
          <MdOutlineArrowBackIosNew /> Go back
        </button>

        <h3>New Invoice</h3>

        <form>
          <div className="from bill">
            <p>Bill From</p>
            <div className="street sec">
              <label htmlFor="street">Street Address</label>

              <input type="text" id="street" />
            </div>

            <div className="zone">
              <div className="city sec">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
              </div>

              <div className="code sec">
                <label htmlFor="code">Post Code</label>
                <input type="text" id="code" />
              </div>
            </div>

            <div className="country sec">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" />
            </div>
          </div>

          <div className="to bill">
            <p>Bill To</p>
            <div className="name sec">
              <label htmlFor="name">Client's Name</label>

              <input type="text" id="name" />
            </div>

            <div className="email sec">
              <label htmlFor="email">Client's Email</label>

              <input type="text" id="email" />
            </div>

            <div className="zone">
              <div className="city sec">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
              </div>

              <div className="code sec">
                <label htmlFor="code">Post Code</label>
                <input type="text" id="code" />
              </div>
            </div>

            <div className="country sec">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" />
            </div>
          </div>
        </form>
      </div>
    </SInvoiceForm>
  );
};

export default InvoiceForm;
