import { useEffect, useRef, useState } from "react";

import { modalStore } from "src/store/modal";

import classNames from "src/functions/classNames";

import BurgerIcon from "./icons/burger.svg";
import NavigatorIcon from "./icons/navigator.svg";

import style from "./index.module.scss";

export default function FloatButtons() {

  const { activeModal, height, openModal, closeModal } = modalStore();

  const ref = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const screenHeight = window.screen.height;
    const buttonsHeight = ref.current.clientHeight;

    // Position to center
    if (height === null) {
      setOffset(-(screenHeight / 2 - buttonsHeight / 2));
      return;
    }

    // Check if float buttons outside viewport
    setHidden(height + buttonsHeight > screenHeight);

    // Position to top of modal
    setOffset(-(height + 24));
  }, [height]);

  const handleBurgerClick = () => {
    if (activeModal === "FILTER") {
      closeModal();
      return;
    }

    openModal("FILTER");
  };

  return (
    <div
      className={classNames(
        style.buttons,
        offset !== 0 && style.buttonsActive,
        hidden && style.buttonsHidden
      )}
      ref={ref}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      <div className={style.buttons__item}>
        <img src={NavigatorIcon} alt="navigator icon" />
      </div>
      <div
        className={style.buttons__item}
        onClick={handleBurgerClick}
      >
        <img src={BurgerIcon} alt="burger icon" />
      </div>
    </div>
  );
}
