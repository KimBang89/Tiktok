import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSignOut, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

//
const cx = classNames.bind(styles);
function Header() {
    //
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search Account and Videos" />
                        <button className={cx('btn-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button
                        primary
                        //  className={cx('custom-login')}
                        // loginIcon={<FontAwesomeIcon icon={faSignIn} />}
                        // logoutIcon={<FontAwesomeIcon icon={faSignOut} />}
                    >
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
