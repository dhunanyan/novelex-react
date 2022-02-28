import React, { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import { firestore } from "./firebase/firebase.utils";
import "firebase/compat/storage";

import FormInput from "./components/form-input/form-input.component";
import CustomButton from "./components/custom-button/custom-button.component";

const ResultAdd = ({ sectionId, cardsObjLength }) => {
  const storage = firebase.storage();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [card, setCard] = useState({
    cardId: cardsObjLength,
    page: sectionId,
    descr: "",
    name: "",
    title: "",
    imageUrl: "",
  });
  const { descr, name, title } = card;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCard({ ...card, [name]: value });
  };

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    const uploadTask = storage
      .ref(`images/${sectionId}/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress);
      },
      (error) => {
        alert("Oops something went wrong with uploading image");
        console.log(error);
      },
      () => {
        storage
          .ref(`images/${sectionId}/${image.name}`)
          .getDownloadURL()
          .then((url) => {
            alert(url);
            setCard({ ...card, imageUrl: url });
            console.log(card);
          });
      }
    );
  };

  useEffect(() => {
    if (progress === 100) {
      const postDataHandler = (event) => {
        event.preventDefault();
        handleImageUpload();
        const batch = firestore.batch();
        const docRef = firestore.collection("cards");

        docRef.add(card);

        batch.commit().then(() => {
          alert("Card added");
        });
      };
    }
  }, [progress]);

  return (
    <form onSubmit={postDataHandler}>
      <FormInput
        name="title"
        type="text"
        value={title}
        onChange={handleChange}
        required
        autoComplete="on"
        placeholder="Title"
      />
      <FormInput
        name="descr"
        type="text"
        value={descr}
        onChange={handleChange}
        required
        autoComplete="on"
        placeholder="Description"
      />
      <FormInput
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
        required
        autoComplete="on"
        placeholder="Card shorten name"
      />
      <FormInput
        name="image"
        type="file"
        onChange={handleImageChange}
        required
      />

      <CustomButton type="submit">POST</CustomButton>
    </form>
  );
};

export default ResultAdd;
