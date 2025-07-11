import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Portfolio.module.css';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

// Dynamically import all images and thumbnails
const images = import.meta.glob('../../assets/gallery/*.{jpg,png,jpeg}', { eager: true, as: 'url' });
const thumbnails = import.meta.glob('../../assets/gallery/thumbnail/*.{jpg,png,jpeg}', { eager: true, as: 'url' });

const cx = classNames.bind(styles);
export const Portfolio = () => {

  // Helper to get filename from path
  const getFileName = (path: string) => path.split('/').pop() || '';

  const galleryID = 'portfolio-gallery';
  const [galleryItems, setGalleryItems] = useState<Array<{
    src: string;
    thumb: string;
    fileName: string;
    width: number;
    height: number;
  }>>([]);

  // Helper to get image dimensions
  const getImageSize = (src: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.onload = () => {
        resolve({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.onerror = () => {
        resolve({ width: 1400, height: 933 }); // fallback
      };
      img.src = src;
    });
  };

  useEffect(() => {
    const buildGalleryItems = async () => {
      const items = await Promise.all(
        Object.entries(images).map(async ([imgPath, imgUrl]) => {
          const fileName = getFileName(imgPath);
          const thumbEntry = Object.entries(thumbnails).find(([thumbPath]) => getFileName(thumbPath) === fileName);
          const { width, height } = await getImageSize(imgUrl as string);
          return {
            src: imgUrl as string,
            thumb: thumbEntry ? (thumbEntry[1] as string) : (imgUrl as string),
            fileName,
            width,
            height,
          };
        })
      );
      setGalleryItems(items);
    };
    buildGalleryItems();
  }, []);

  useEffect(() => {
    if (galleryItems.length === 0) return;
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
    return () => {
      lightbox.destroy();
    };
  }, [galleryItems]);

  return (
    <div className={cx(styles.base)}>
      <h2>Portfolio</h2>
      <div className={cx(styles.galleryWrapper)} id={galleryID}>
        {galleryItems.map((item, index) => (
          <a
            href={item.src}
            data-pswp-width={item.width}
            data-pswp-height={item.height}
            key={galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
            className={cx(styles.galleryItem)}
          >
            <img src={item.thumb} alt={'Matthijs Beeke'} />
          </a>
        ))}
      </div>
    </div>
  );
};
