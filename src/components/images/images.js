import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './Image.module.scss';

//khi onError là khi src lỗi thì handleError
const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            //mặc định là class .wrapper class modifier được truyền bên ngoài vào qua biến className
            className={classNames(styles.wrapper, className)}
            {...props}
            ref={ref}
            src={fallback || src}
            onError={handleError}
            alt={alt}
        />
    );
});
Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
