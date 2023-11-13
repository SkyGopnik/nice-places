import { filterModalStore } from "src/store/filterModal";

import NavigatorIcon from "./icons/navigator.svg";
import BurgerIcon from "./icons/burger.svg";

import style from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import classNames from "src/functions/classNames";

export default function FloatButtons() {

  const { opened, position, openModal, closeModal } = filterModalStore();

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
    if (position === null) {
      setOffset(-(screenHeight / 2 - buttonsHeight / 2));
      return;
    }

    // Check if float buttons outside viewport
    setHidden(position + buttonsHeight > screenHeight);

    // Position to top of modal
    setOffset(-(position + 24));
  }, [position]);

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
        onClick={opened ? closeModal : openModal}
      >
        <img src={BurgerIcon} alt="burger icon" />
      </div>
    </div>
  );
}
