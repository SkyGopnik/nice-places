import React, { useEffect } from "react";

import Modal from "src/components/Modal";

import { filterStore } from "src/store/filter";
import { modalStore } from "src/store/modal";

import style from "./index.module.scss";

export default function ItemModal() {

  const { activeModal } = modalStore();
  const { activeItem, setActiveItem } = filterStore();

  useEffect(() => {
    if (activeModal === "ITEM") {
      return;
    }

    setActiveItem(null);
  }, [activeModal]);

  return (
    <Modal snapPoints={[510, 302, 153]} opened={activeModal === "ITEM"}>
      <div className={style.item}>
        1
      </div>
    </Modal>
  );

}
