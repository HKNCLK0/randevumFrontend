import React from "react";
import { Input } from "../main/UI";

import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setSurname,
  setEmail,
  setPassword,
} from "../../redux/RegisterSlices";

const First = (props) => {
  const { name, surname, email, password } = useSelector(
    (state) => state.register
  );
  const dispatch = useDispatch();
  return (
    <div>
      <Input />
      <Input />
      <button onClick={props.nextStep} className="bg-red-200">
        Sonraki
      </button>
    </div>
  );
};

export default First;
