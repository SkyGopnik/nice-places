import { SheetRef } from "react-modal-sheet";
import React, { ReactNode, useEffect, useRef } from "react";

import BottomSheet from "src/components/BottomSheet";

import { modalStore } from "src/store/modal";
import { floatButtonsStore } from "src/store/floatButtons";

import { useFirstRender } from "src/hooks/useFirstRender";

import style from "./index.module.scss";

interface Props {
  snapPoints: Array<number>,
  children: ReactNode,
  opened: boolean
}

export default function Modal({ snapPoints, children, opened }: Props) {

  const { snap, setSnap, closeModal } = modalStore();
  const { setPosition } = floatButtonsStore();

  const filterRef = useRef<SheetRef>();
  const firstRender = useFirstRender();

  useEffect(() => {
    if (snap === null) {
      return;
    }

    filterRef.current?.snapTo(snap);
  }, [snap]);

  const onSnap = (index: number) => {
    // Костыль, так как автор Modal Sheet вызывает этот Cb постоянно, а не только на точках
    if (firstRender) {
      return;
    }

    setSnap(null);
    setPosition(snapPoints[index]);
  };

  const onClose = () => {
    setTimeout(() => setPosition(null));
  };

  return (
    <BottomSheet
      className={style.modal}
      ref={filterRef}
      isOpen={opened}
      initialSnap={snapPoints.length - 1}
      snapPoints={snapPoints}
      tweenConfig={{ ease: 'easeOut', duration: 0.3 }}
      onCloseStart={onClose}
      onSnap={onSnap}
      onClose={closeModal}
    >
      {children}
    </BottomSheet>
  );
}
