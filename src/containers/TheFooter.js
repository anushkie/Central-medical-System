import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://www.uea.ac.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UEA
        </a>
        <span className="ml-1">&copy; 2021 Dissertation Project.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Page Credits:</span>
        <a
          href="https://github.com/anushkie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anushka Bhatnagar
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
