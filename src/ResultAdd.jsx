import React, { useState, useEffect } from "react";
import results from "./results";
import { firestore } from "./firebase/firebase.utils";

import FormInput from "./components/form-input/form-input.component";
import CustomButton from "./components/custom-button/custom-button.component";

import { LARGE_CARDS, CARDS } from "./redux/sections/sections.data";

const ResultAdd = () => {
  const [student, setStudent] = useState({
    studentName: "",
    studentGrade: "",
    studentUnit: "",
  });
  const { studentName, studentGrade, studentUnit } = student;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setStudent({ ...student, [name]: value });
  };

  const postDataHandler = (e) => {
    e.preventDefault();
    const batch = firestore.batch();
    const docRef = firestore.collection("cards");

    CARDS.forEach((card) => {
      docRef.add(card);
    });

    batch.commit().then(() => {
      alert("Card added");
    });
  };

  useEffect(() => {
    results
      .get("/student.json")
      .then((res) => res.data)
      .then((data) => console.log(data));
  }, []);

  return (
    <form onSubmit={postDataHandler}>
      <FormInput
        name="studentName"
        type="text"
        value={studentName}
        onChange={handleChange}
        required
        autoComplete="on"
        placeholder="name"
      />
      <FormInput
        name="studentGrade"
        type="text"
        value={studentGrade}
        onChange={handleChange}
        required
        autoComplete="on"
        placeholder="Grade"
      />
      <FormInput
        name="studentUnit"
        type="text"
        value={studentUnit}
        onChange={handleChange}
        required
        autoComplete="on"
        placeholder="Unit"
      />

      <CustomButton type="submit">POST</CustomButton>
    </form>
  );
};

export default ResultAdd;
