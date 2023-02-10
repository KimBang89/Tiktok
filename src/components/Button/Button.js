import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';
//
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    className,
    disable,
    loginIcon,
    logoutIcon,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    onClick,
    ...passProps
}) {
    //
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //disable thì xóa hết các sự kiện để tránh thao tác từ người dùng
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        //link nội bội còn a href là external
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        [className]: className, //khi có className thì lấy giá trị className, tất cả classes nếu true mới được truyền vào
    });
    //
    return (
        <Comp className={classes} {...props}>
            {loginIcon && <span className={cx('loginIcon')}>{loginIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {logoutIcon && <span className={cx('logoutIcon')}>{logoutIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    disable: PropTypes.string,
    login: PropTypes.node,
    logout: PropTypes.node,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func,
};
export default Button;
