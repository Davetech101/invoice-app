/* eslint-disable react/no-unescaped-entities */
import { useState, useCallback } from "react";
import SInvoiceForm from "@/styles/styled-components/InvoiceForm";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
      streetAddress: "",
      city: "",
      postalCode: "",
      country: "",
      clName: "",
      clEmail: "",
      clAddress: "",
      clCity: "",
      clPostalCode: "",
      clCountry: "",
      invoiceDate: "",
      paymentTerms: "",
      desc: "",
      itName:"",
      qty: "",
      price: "",
      amt: "",
  });

  const onChange = useCallback(
    (e) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      console.log(formData);
    },
    [formData]
  );

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
              <label htmlFor="streetAddress">Street Address</label>

              <input type="text" id="streetAddress" onChange={onChange}/>
            </div>

            <div className="zone">
              <div className="city sec">
                <label htmlFor="city">City</label>
                <input type="text" id="city" onChange={onChange}/>
              </div>

              <div className="code sec">
                <label htmlFor="postalCode">Post Code</label>
                <input type="text" id="postalCode" onChange={onChange}/>
              </div>
            </div>

            <div className="country sec">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" onChange={onChange}/>
            </div>
          </div>

          <div className="to bill">
            <p>Bill To</p>
            <div className="name sec">
              <label htmlFor="clName">Client's Name</label>

              <input type="text" id="clName" onChange={onChange}/>
            </div>

            <div className="email sec">
              <label htmlFor="clEmail">Client's Email</label>

              <input type="email" id="clEmail" onChange={onChange}/>
            </div>

            <div className="clStreet sec">
              <label htmlFor="clAddress">Street Address</label>

              <input type="text" id="clAddress" onChange={onChange}/>
            </div>

            <div className="zone">
              <div className="clCity sec">
                <label htmlFor="clCity">City</label>
                <input type="text" id="clCity" onChange={onChange}/>
              </div>

              <div className="clCode sec">
                <label htmlFor="clPostalCode">Post Code</label>
                <input type="text" id="clPostalCode" onChange={onChange}/>
              </div>
            </div>

            <div className="clCountry sec">
              <label htmlFor="clCountry">Country</label>
              <input type="text" id="clCountry" onChange={onChange}/>
            </div>
          </div>

          <div className="dates">
            <div className="invDate">
              <label htmlFor="invoiceDate">Invoice Date</label>

              <input type="date" id="invoiceDate" onChange={onChange}/>
            </div>

            <div className="terms">
              <label htmlFor="paymentTerms">
                Payment Terms
                <p>(IN DAYS)</p>
              </label>

              <input type="number" max="30" min="1" id="paymentTerms" onChange={onChange}/>
            </div>

            <div className="proDesc">
              <label htmlFor="desc">Project / Description</label>

              <input type="text" id="desc" onChange={onChange}/>
            </div>
          </div>

          <div className="itemList bill">
            <div className="itName sec">
              <label htmlFor="itName">Item Name</label>

              <input type="text" id="itName" />
            </div>

            <div className="math">
              <div className="qty sec">
                <label htmlFor="qty">Qty.</label>
                <input type="text" id="qty" />
              </div>

              <div className="price sec">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" />
              </div>

              <div className="total sec">
                <label htmlFor="total">Total</label>
                <div className="amt">130.00</div>
              </div>

              <div className="trash">
                <IoMdTrash />
              </div>
            </div>
          </div>

          <button className="add" type="button">
            <HiPlusSm /> Add New Item
          </button>
        </form>
      </div>
      <div className="btns">
        <button className="discard">Discard</button>

        <button className="draft">Save as Draft</button>

        <button className="send">Save & Send</button>
      </div>
    </SInvoiceForm>
  );
};

export default InvoiceForm;
