import React from 'react';
// LigthGallery
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import styles from './Gallery.module.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

export const Gallery = () => {
  const hallo = 'test';

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className={cx(styles.base)}> 
    
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        download={false}
      >
        <a href="https://picsum.photos/1280/720">
          {/* Thumbnail */}
          <img alt="img1" src="https://picsum.photos/280/210" />
        </a>
        <a href="https://picsum.photos/1280/720">
          <img alt="img2" src="https://picsum.photos/340/450" />
        </a>
                
      </LightGallery>
    </div>
  );
};