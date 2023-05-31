import SSubHeader from "@/styles/styled-components/SubHeader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiPlusSm } from "react-icons/hi";
import Link from "next/link";

const SubHeader = () => {
  return (
    <SSubHeader>
      <div className="txt">
        <p>Invoice</p>
        <small>No invoices</small>
      </div>

      <div className="right">
        <div className="filter">
          Filter
          <MdKeyboardArrowDown />
        </div>

        <Link href="/create-invoice"> <div className="plus"><HiPlusSm/></div> New</Link>
      </div>
    </SSubHeader>
  );
};

export default SubHeader;
