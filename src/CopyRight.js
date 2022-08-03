import React from "react";

const CopyRight = ({ name = "Name & Year" }) => (
  <div class="copyright py-4 text-center text-white">
    <div class="container">
      <small>Copyright &copy; {name}</small>
    </div>
  </div>
);

export default CopyRight;
