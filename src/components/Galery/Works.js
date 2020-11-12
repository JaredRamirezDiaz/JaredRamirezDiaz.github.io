import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import {
  HeroesDeLaBiblia,
  NocheMexicana,
  ItsurGeek1,
  PosterUvas,
  ItsurGeek,
  FinalTrompeta,
  AnclaDalvacion,
  AvatarWallpaper,
  Ancla,
  Ensamble,
  LionAndLamb,
  LonaV,
  EfectoPermanencia,
  ConciertoGif,
} from "../../assets/index";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: `${HeroesDeLaBiblia}`,
    width: 6,
    height: 4,
  },
  {
    src: `${NocheMexicana}`,
    width: 6,
    height: 10,
  },
  {
    src: `${ItsurGeek1}`,
    width: 6,
    height: 4,
  },
  {
    src: `${AnclaDalvacion}`,
    width: 6,
    height: 10,
  },
  {
    src: `${FinalTrompeta}`,
    width: 6,
    height: 10,
  },
  {
    src: `${ItsurGeek}`,
    width: 6,
    height: 4,
  },
  {
    src: `${PosterUvas}`,
    width: 6,
    height: 10,
  },
  {
    src: `${AvatarWallpaper}`,
    width: 6,
    height: 4,
  },

  {
    src: `${Ancla}`,
    width: 6,
    height: 10,
  },
  {
    src: `${Ensamble}`,
    width: 6,
    height: 10,
  },
  {
    src: `${ConciertoGif}`,
    width: 6,
    height: 4,
  },
  {
    src: `${EfectoPermanencia}`,
    width: 4,
    height: 5,
  },
  {
    src: `${LionAndLamb}`,
    width: 6,
    height: 10,
  },
  {
    src: `${LonaV}`,
    width: 6,
    height: 10,
  },
  {
    src: `${HeroesDeLaBiblia}`,
    width: 6,
    height: 4,
  },
  {
    src: `${LionAndLamb}`,
    width: 6,
    height: 10,
  },
  {
    src: `${LonaV}`,
    width: 6,
    height: 10,
  },
];

const Works = ({ className }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={className}>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Works;
