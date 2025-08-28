"use client";

import PopupContainer from "../PopupContainer";
import Enter from "../Enter";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { init } from "../../helpers/scrollToAnchor";
import { useWindowWidth } from "../../helpers/useWindowWidth";
import Image from "next/image";
import { useStore } from "../../store/profile";
import { useTranslations } from "next-intl";
import { useGetProfile } from "@/hooks/useGetProfile";

const Header = () => {
  const headerRef = useRef();
  const prevScrollY = useRef(0);

  const { data, isLoading, isError } = useGetProfile();

  const [mobile, setMobile] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    init(() => setOpenMenu(false));

    const showHeader = () => {
      const currentScrollY = window.scrollY;

      if (headerRef.current) {
        if (currentScrollY > prevScrollY.current) {
          headerRef.current.classList.remove("show");
        } else {
          headerRef.current.classList.add("show");
        }
      }

      prevScrollY.current = currentScrollY;
    };
    document.addEventListener("scroll", showHeader);

    return () => {
      document.removeEventListener("scroll", showHeader);
    };
  }, [headerRef]);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    headerRef.current.style.opacity = 1;

    setMobile(windowWidth <= 800);
  }, [windowWidth]);

  const pathname = usePathname();

  const t = useTranslations("header");
  const navigation = [0, 1, 2, 3, 4].map((index) => ({
    href: t(`href.${index}`),
    title: t(`navigation.${index}`),
  }));

  const openEnter = () => {
    setOpenPopup(true);
  };

  const closePopup = () => {
    setOpenPopup(false);
  };

  const HeaderContent = () => {
    return (
      <>
        <nav className='header__nav'>
          {navigation.map((el, index) => (
            <li className='btn btn__nav' key={index}>
              {pathname !== "/" ? (
                <Link href={`/${el.href}`}>{el.title}</Link>
              ) : (
                <a
                  className='js-to-anchor'
                  onClick={() => {
                    document.querySelector("body").style.overflow = "inherit";
                    setOpenMenu(false);
                  }}
                  href={el.href}
                >
                  {el.title}
                </a>
              )}
            </li>
          ))}
        </nav>
        {data ? (
          <Link
            href='/profile'
            onClick={() => {
              document.querySelector("body").style.overflow = "inherit";
              setOpenMenu(false);
            }}
            className='btn btn__gradient'
          >
            <span>
              <Image
                src={"/icons/person.svg"}
                width={24}
                height={24}
                alt='profile img'
              />
            </span>
            {data.name ? data.name : data.email}
          </Link>
        ) : (
          <button className='btn btn__gradient' onClick={openEnter}>
            {t("loginIn__btn")}
          </button>
        )}
      </>
    );
  };

  return (
    <>
      <header className='container show' ref={headerRef}>
        {mobile ? (
          <div className='mobile__wrap'>
            <div
              className='mobile__burger'
              onClick={() => {
                document.querySelector("body").style.overflow = "hidden";
                setOpenMenu(true);
              }}
            >
              <Image
                src='/icons/burger.svg'
                width={24}
                height={24}
                alt={"burger"}
              />
            </div>
          </div>
        ) : (
          <div className='header__container'>
            <HeaderContent />
          </div>
        )}
        {mobile && (
          <div
            className={
              openMenu ? "mobile__container open" : "mobile__container"
            }
          >
            <button
              className='mobile__close'
              onClick={() => {
                document.querySelector("body").style.overflow = "inherit";
                setOpenMenu(false);
              }}
            >
              <Image
                src='/images/plus.svg'
                width={22}
                height={22}
                alt={"close"}
              />
            </button>
            <HeaderContent />
          </div>
        )}
      </header>

      <PopupContainer OpenPopup={openPopup} ClosePopup={closePopup}>
        <Enter closePopup={closePopup} />
      </PopupContainer>
    </>
  );
};
export default Header;
