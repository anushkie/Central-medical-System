import React from "react";
import Registration from "./Register";
import firebaseDb from "./Firebase";

const ManageReg = () => {
  const addOrEdit = (obj) => {
    console.log(firebaseDb);
    if (firebaseDb) {
      firebaseDb.child("reg").push(obj, (err) => {
        if (err) console.log(err);
      });
    }
  };

  return (
    <>
      <Registration addOrEdit={addOrEdit} />
    </>
  );
};
export default ManageReg;
