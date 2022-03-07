import React, { useState } from "react";

import firebase from "firebase/compat/app";
import { firestore } from "../../firebase/firebase.utils";
import "firebase/compat/storage";

import { useDispatch, useSelector } from "react-redux";

import { selectCardsLength } from "../../redux/cards/cards.selectors";

import { FaTimes as Times } from "react-icons/fa";
import { BsTextareaResize as Resize } from "react-icons/bs";
import { FaSkyatlas as Tick } from "react-icons/fa";

import {
  CardAddContainer,
  FormTextArea,
  Buttons,
  SubmitButton,
  JustAButton,
  CardCloseIcon,
  CardResizeIcon,
  CardInput,
  CardLayer,
  CardLayerInner,
  SuccessMessageContainer,
} from "./add-card.styles";

import "./add-card.styles.scss";
import { addingCard } from "../../redux/cards/cards.actions";

const CardAdd = ({ sectionId, opacity, handleCloseButton, gridData }) => {
  const storage = firebase.storage();
  const dispatch = useDispatch();
  const cardsObjLength = useSelector(selectCardsLength);
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [progress, setProgress] = useState(0);
  const { col, row } = gridData;
  const [card, setCard] = useState({
    cardId: cardsObjLength + 1,
    page: sectionId,
    descr: "",
    name: "",
    title: "",
    imageUrl: "",
    size: 1,
    gridRow: row,
    gridCol: col,
  });
  const { descr, name, title } = card;

  //IMAGE
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
        console.log(error);
        alert(error);
      },
      () => {
        storage
          .ref(`images/${sectionId}/${image.name}`)
          .getDownloadURL()
          .then((imageUrl) => {
            setCard({ ...card, imageUrl });
            console.log(imageUrl);
          })
          .catch((err) => console.log(err));
      }
    );
  };

  //POST
  const postDataHandler = async (event) => {
    event.preventDefault();

    dispatch(addingCard(card));

    const batch = firestore.batch();
    const docRef = firestore.collection("cards");

    docRef.add(card);
    batch.commit().then(() => {
      setSuccessMessage(true);
    });
  };

  //INPUTS
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setCard({ ...card, [name]: value });
  };

  //IMG INPUT
  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  //SELECTS
  const handleSelectChange = (event) => {
    const { value, name } = event.target;
    setCard({ ...card, [name]: Number(value) });
  };

  return (
    <CardLayer>
      <CardLayerInner onClick={handleCloseButton} />
      <CardAddContainer opacity={opacity}>
        <CardCloseIcon opacity={opacity} onClick={handleCloseButton}>
          <Times />
        </CardCloseIcon>
        {!successMessage ? (
          <div>
            <CardResizeIcon>
              <Resize />
            </CardResizeIcon>
            <form onSubmit={postDataHandler}>
              <CardInput
                name="title"
                type="text"
                value={title}
                onChange={handleInputChange}
                required
                autoComplete="on"
                placeholder="Title"
              />
              <FormTextArea
                name="descr"
                type="text"
                value={descr}
                onChange={handleInputChange}
                required
                autoComplete="on"
                placeholder="Description"
              />
              <CardInput
                name="name"
                type="text"
                value={name}
                onChange={handleInputChange}
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
                {progress === 0 ? (
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
                ) : card.imageUrl ? (
                  <SubmitButton type="submit">POST</SubmitButton>
                ) : null}
              </Buttons>
            </form>
          </div>
        ) : (
          <SuccessMessageContainer>
            <p>Successfully posted!</p>
            <p>
              <span>
                <Tick />
              </span>
            </p>
          </SuccessMessageContainer>
        )}
      </CardAddContainer>
    </CardLayer>
  );
};

export default CardAdd;
