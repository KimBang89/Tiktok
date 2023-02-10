import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = () => {}, hideOnClick = false }) {
    //các cấp object
    const [history, setHistory] = useState([{ data: items }]);
    //lấy giá trị cuối, nếu có children thì sẽ lấy children
    const current = history[history.length - 1];
    //
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    //khi click thì nó thêm children vào history => length>1 render header, children
                    onClick={() => {
                        isParent ? setHistory((prev) => [...prev, item.children]) : onChange(item);
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick} //ẩn khi click
            offset={[16, 8]} //ngang vs cao
            delay={[0, 700]}
            placement="bottom-end"
            render={renderResult}
            //khi ẩn menu thì set về menu đầu tiên
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};
export default Menu;
