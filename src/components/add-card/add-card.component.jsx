import React, { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import { firestore } from "../../firebase/firebase.utils";
import "firebase/compat/storage";

import { useDispatch, useSelector } from "react-redux";

import {
  selectCards,
  selectCardsLength,
} from "../../redux/cards/cards.selectors";

import { FaTimes as Times } from "react-icons/fa";
import { BsTextareaResize as Resize } from "react-icons/bs";

import {
  CardAddContainer,
  FormTextArea,
  Buttons,
  SubmitButton,
  JustAButton,
  CardCloseIcon,
  CardResizeIcon,
  CardInput,
} from "./add-card.styles";

import "./add-card.styles.scss";
import { addCard } from "../../redux/cards/cards.utils";
import { addingCard } from "../../redux/cards/cards.actions";

const CardAdd = ({ sectionId, fill, opacity, handleCloseButton }) => {
  const cardsObjLength = useSelector(selectCardsLength);
  const [image, setImage] = useState(null);

  const [progress, setProgress] = useState(0);
  const [card, setCard] = useState({
    cardId: cardsObjLength + 1,
    page: sectionId,
    descr: "",
    name: "",
    title: "",
    imageUrl: "",
  });

  const { descr, name, title } = card;
  const handleImageUpload = () => {
    const storage = firebase.storage();
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
        console.log(error);
        alert(error);
      },
      () => {
        storage
          .ref(`images/${sectionId}/${image.name}`)
          .getDownloadURL()
          .then((url) => {
            setCard({ ...card, imageUrl: url });
          });
      }
    );
  };

  const dispatch = useDispatch();

  const postDataHandler = async (event) => {
    event.preventDefault();
    dispatch(addingCard(card));
    const batch = firestore.batch();
    const docRef = firestore.collection("cards");
    docRef.add(card);
    batch.commit().then(() => alert("Card successfully added"));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCard({ ...card, [name]: value });
  };

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <CardAddContainer opacity={opacity}>
      <CardResizeIcon>
        <Resize />
      </CardResizeIcon>
      <CardCloseIcon opacity={opacity} onClick={handleCloseButton}>
        <Times />
      </CardCloseIcon>
      <form onSubmit={postDataHandler}>
        <CardInput
          name="title"
          type="text"
          value={title}
          onChange={handleChange}
          required
          autoComplete="on"
          placeholder="Title"
        />
        <FormTextArea
          name="descr"
          type="text"
          value={descr}
          onChange={handleChange}
          required
          autoComplete="on"
          placeholder="Description"
        />
        <CardInput
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          required
          autoComplete="on"
          placeholder="Card shorten name"
        />
        <input
          className="custom-file-input"
          name="image"
          type="file"
          onChange={handleImageChange}
          required
          pfor="image"
        />

        <progress value={progress} max="100" />

        <Buttons>
          {progress >= 0 && progress < 100 ? (
            <JustAButton
              progress={progress > 60 ? progress : null}
              type="button"
              onClick={
                image && card.descr && card.title && card.name
                  ? handleImageUpload
                  : null
              }
            >
              Upload image
            </JustAButton>
          ) : (
            <SubmitButton type="submit">POST</SubmitButton>
          )}
        </Buttons>
      </form>
    </CardAddContainer>
  );
};

export default CardAdd;
