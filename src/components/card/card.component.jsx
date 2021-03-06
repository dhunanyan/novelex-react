import React, { useEffect, useState } from "react";
import { useSpring, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import firebase from "firebase/compat/app";

import { IoIosQuote as Quots } from "react-icons/io";
import { FaTrashAlt as Trash, FaPen as Pen } from "react-icons/fa";

import {
  CardButton,
  CardContainer,
  CardAvatar,
  CardBottomSheet,
  CardTitle,
  CardTopSheet,
  CardDelete,
  CardTopSheetLayer,
  CardButtonsContainer,
  CardEdit,
  HandIcon,
  HandIconContainer,
  CardAvatarImg,
} from "./card.styles";
import { useDispatch } from "react-redux";
import {} from "../../redux/cards/cards.selectors";
import { deleteCard } from "../../redux/cards/cards.actions";

const TOP_THRESHOLD = 190;
const BOTTOM_THRESHOLD = 241;

export const TopSheet = ({ y, set, onActive, onProgress, cardDescr }) => {
  const [expanded, setExpanded] = useState(false);
  const bind = useDrag(
    ({ movement: [x, y], down, tap }) => {
      if (!down && tap) {
        if (expanded) {
          set({ y: 320, config: { duration: 250 } });
          onProgress(320, true);
        } else {
          set({ y: 60, config: { duration: 250 } });
          onProgress(60, true);
        }
        setExpanded(!expanded);
        return;
      }
      if (!down) {
        if (y >= TOP_THRESHOLD) {
          set({ y: 320, config: { duration: 250 } });
          onProgress(320, false);
          setExpanded(false);
        } else {
          set({ y: 60, config: { duration: 250 } });
          onProgress(60, false);
          setExpanded(true);
        }
        onActive(false);
      } else {
        set({ y, config: { duration: 60 } });
        onActive(true);
        onProgress(y, false);
      }
    },
    {
      initial: () => [0, y.get()],
      bounds: { left: 0, right: 0, top: 60, bottom: 320 },
      rubberband: true,
    }
  );

  return (
    <CardTopSheet style={{ y }} {...bind()}>
      <div>
        <p>
          <span>
            <Quots />
          </span>
          {cardDescr}
        </p>
      </div>
      <CardTopSheetLayer />
    </CardTopSheet>
  );
};

export const BottomSheet = ({
  y,
  set,
  onActive,
  onProgress,
  fill,
  opacity,
}) => {
  const [expanded, setExpanded] = useState(false);
  const bind = useDrag(
    ({ movement: [x, y], down, tap }) => {
      if (!down && tap) {
        if (expanded) {
          set({ y: 400, config: { duration: 250 } });
          onProgress(400, true);
        } else {
          set({ y: 82, config: { duration: 250 } });
          onProgress(82, true);
        }
        setExpanded(!expanded);
        return;
      }
      if (!down) {
        if (y >= BOTTOM_THRESHOLD) {
          set({ y: 400, config: { duration: 250 } });
          onProgress(400, true);
          setExpanded(false);
        } else {
          set({ y: 82, config: { duration: 250 } });
          onProgress(82, false);
          setExpanded(true);
        }
        onActive(false);
      } else {
        set({ y, config: { duration: 60 } });
        onActive(true);
        onProgress(y, false);
      }
    },
    {
      initial: () => [0, y.get()],
      bounds: { left: 0, right: 0, top: 82, bottom: 400 },
      rubberband: true,
    }
  );

  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated((isRotated) => !isRotated);
  };

  return (
    <CardBottomSheet style={{ y }} {...bind()} onClick={handleClick}>
      <HandIconContainer isRotated={isRotated}>
        <HandIcon opacity={opacity} />
      </HandIconContainer>
      <CardButton fill={fill} to="/" className="card-button">
        Read more
      </CardButton>
    </CardBottomSheet>
  );
};

export const Card = ({ card, fill, opacity, currentUser }) => {
  const { name, title, descr, imageUrl } = card;
  const [active, setActive] = useState({ top: false, bottom: false });
  // const [expanded, setExpanded] = useState(false);
  const [{ y: topY }, topSet] = useSpring(() => ({
    y: 320,
    config: {
      ...config,
    },
  }));
  const [{ y: bottomY }, bottomSet] = useSpring(() => ({
    y: 400,
    config: {
      ...config,
    },
  }));
  const avatarY = () => {
    return topY.to({
      range: [146, 290, 320],
      output: [-284, 0, 20],
      extrapolate: "clamp",
    });
  };
  const avatarScale = () => {
    return topY.to({
      range: [180, 240, 320],
      output: ["scale(0.22)", "scale(1)", "scale(1)"],
    });
  };
  const titleY = () => {
    return topY.to({
      range: [136, 240, 320],
      output: [-250, -54, 18],
      extrapolate: "clamp",
    });
  };
  const titleScale = () => {
    return topY.to({
      range: [60, 136, 320],
      output: ["scale(1.1)", "scale(1)", "scale(1)"],
    });
  };

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(deleteCard(card));

    firebase
      .firestore()
      .collection("cards")
      .where("name", "==", name)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
  };

  return (
    <CardContainer fill={fill} currentUser={currentUser}>
      {currentUser ? (
        <CardButtonsContainer>
          <CardEdit fill={fill} opacity={opacity} onClick={handleOnClick}>
            <Pen />
          </CardEdit>
          <CardDelete fill={fill} opacity={opacity} onClick={handleOnClick}>
            <Trash />
          </CardDelete>
        </CardButtonsContainer>
      ) : null}
      <CardAvatar style={{ y: avatarY(), transform: avatarScale() }}>
        <CardAvatarImg imageUrl={imageUrl} />
      </CardAvatar>
      <CardTitle
        opacity={opacity}
        style={{ y: titleY(), transform: titleScale() }}
      >
        {title}
      </CardTitle>
      <TopSheet
        cardDescr={descr}
        y={topY}
        set={topSet}
        onActive={(topActive) => setActive({ ...active, top: topActive })}
        onProgress={(y, reset) => {
          if (active.top) {
            bottomSet({
              y: 523 - y / 2.6,
              config: { duration: reset ? 250 : 60 },
            });
          }
        }}
      />
      <BottomSheet
        fill={fill}
        opacity={opacity}
        y={bottomY}
        set={bottomSet}
        onActive={(bottomActive) => {
          setActive({ ...active, bottom: bottomActive });
        }}
        onProgress={(y, reset) => {
          if (active.bottom) {
            if (reset) {
              if (y === 400) {
                topSet({ y: 320, config: { duration: 250 } });
              } else if (y === 82) {
                topSet({ y: 60, config: { duration: 250 } });
              }
              return;
            }
            if (y < 342) {
              topSet({ y: y - 22, config: { duration: 60 } });
            }
          }
        }}
      />
    </CardContainer>
  );
};
