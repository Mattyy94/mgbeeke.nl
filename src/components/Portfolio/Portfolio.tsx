import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './Portfolio.module.css';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Dynamically import all images and thumbnails
const images = import.meta.glob('../../assets/gallery/*.{jpg,png,jpeg}', { eager: true, as: 'url' });
const thumbnails = import.meta.glob('../../assets/gallery/thumbnail/*.{jpg,png,jpeg}', { eager: true, as: 'url' });

const cx = classNames.bind(styles);

// Helper to get filename from path
const getFileName = (path: string) => path.split('/').pop() || '';

export const Portfolio = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Build gallery items by matching images and thumbnails by filename
  const galleryItems = Object.entries(images).map(([imgPath, imgUrl]) => {
    const fileName = getFileName(imgPath);
    // Try to find matching thumbnail
    const thumbEntry = Object.entries(thumbnails).find(([thumbPath]) => getFileName(thumbPath) === fileName);
    return {
      src: imgUrl as string,
      thumb: thumbEntry ? (thumbEntry[1] as string) : (imgUrl as string),
      fileName,
    };
  });

  useEffect(() => {
    if (galleryRef.current) {
      const lg = lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        thumbnail: true,
        zoom: true,
        selector: '.gallery-item',
        download: false,
      });
      return () => {
        lg.destroy();
      };
    }
  }, []);

  return (
    <div className={cx(styles.base)}>
      <h2>Portfolio</h2>
      <div ref={galleryRef} className={cx(styles.galleryWrapper)}>
        {galleryItems.map((item) => (
          <a
            key={item.fileName}
            className="gallery-item"
            data-lg-size="1400-933"
            data-src={item.src}
            data-sub-html={'<h4>Matthijs Beeke</h4>'}
            href={item.src}
          >
            <img src={item.thumb} alt={'Matthijs Beeke'} style={{ maxWidth: 165, margin: 1, }} />
          </a>
        ))}
      </div>
    </div>
  );
};
