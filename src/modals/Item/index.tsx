import React, { useEffect } from "react";

import Modal from "src/components/Modal";

import { filterStore } from "src/store/filter";
import { modalStore } from "src/store/modal";

import classNames from "src/functions/classNames";

import ChevronIcon from "./icons/chevron.svg";
import ShareIcon from "./icons/share.svg";
import LikeIcon from "./icons/like.svg";
import MenuIcon from "./icons/menu.svg";

import PreviewImage1 from "./preview/image-1.jpg";
import PreviewImage2 from "./preview/image-2.jpg";
import PreviewImage3 from "./preview/image-3.jpg";

import style from "./index.module.scss";

export default function ItemModal() {

  const { activeItem: info, setActiveItem } = filterStore();
  const { height, activeModal, setSnap } = modalStore();

  useEffect(() => {
    if (activeModal === "ITEM") {
      return;
    }

    setActiveItem(null);
  }, [activeModal]);

  const handleChevronClick = () => {
    setSnap(height && (height > 153) ? 2 : 1);
  };

  return (
    <Modal snapPoints={[510, 302, 153]} opened={activeModal === "ITEM" && !!info}>
      {info && (
        <div className={style.item}>
          <div
            className={classNames(
              style.item__header,
              height && (height > 153) && style.item__headerActive
            )}
          >
            <h1 className={style.header__title}>
              <span>{info.name}</span>
              <img
                src={ChevronIcon}
                alt="chevron icon"
                onClick={handleChevronClick}
              />
            </h1>
            <div className={style.header__info}>
              <p className={style.header__category}>{info.category}</p>
              <address className={style.header__openTill}>Open till 2:00AM</address>
            </div>
            <a
              className={style.header__link}
              rel="noreferrer"
              target="_blank"
              href="https://google.com/"
            >
              tripadvisor.com/Attraction_Review-g294472-d15636084-Reviews-Beer_Pong_Bar_Belgrade-Belgrade.html
            </a>
          </div>
          {height && (
            <>
              {height > 153 && (
                <p
                  className={classNames(
                    style.item__description,
                    height === 302 && style.item__descriptionHidden
                  )}
                  onClick={() => setSnap(0)}
                >
                  {height === 302 && (
                    <span className={style.item__descriptionGradient} />
                  )}
                  Beer Pong Bar promises unique fun in a downtown location. For those looking for a different kind of a night out. Choose your game – beer pong, darts, table football – and choose your favorite from our amazing selection of draft, craft, and bottled beers. We also offer cocktails and schnapps (be sure to try our homemade honey schnapps). Drop by if you’re into active fun mixed with beer.
                </p>
              )}
              {height > 302 && (
                <div className={style.item__images}>
                  <img src={PreviewImage1} alt="preview 1" />
                  <img src={PreviewImage2} alt="preview 2" />
                  <img src={PreviewImage3} alt="preview 3" />
                  <img src={PreviewImage3} alt="preview 4" />
                </div>
              )}
              {height > 302 && (
                <div className={style.item__menu}>
                  <div className={style.menu__icon}>
                    <img src={MenuIcon} alt="menu icon" />
                  </div>
                  <div className={style.menu__info}>
                    <p className={style.menu__title}>Menu</p>
                    <a
                      className={style.menu__link}
                      rel="noreferrer"
                      target="_blank"
                      href="https://google.com/"
                    >
                      https://instagram.com/ssivuhinbest.ssivuhinbestssivuhinbestssivuhinbest
                    </a>
                  </div>
                </div>
              )}
            </>
          )}
          <div className={style.item__actions}>
            <button className={classNames(style.action__button, style.action__buttonMap)}>
              Show on map
            </button>
            <button className={classNames(style.action__button, style.action__buttonIcon)}>
              <img src={LikeIcon} alt="like icon" />
            </button>
            <button className={classNames(style.action__button, style.action__buttonIcon)}>
              <img src={ShareIcon} alt="share icon" />
            </button>
          </div>
        </div>
      )}
    </Modal>
  );

}
