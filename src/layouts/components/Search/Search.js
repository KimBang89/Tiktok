import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../components/icons';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
//
const cx = classNames.bind(styles);
function Search() {
    //
    const [searchvalue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounceValue = useDebounce(searchvalue, 300); //truyền value vào debounceValue , debounceValue trả về value sau delay s
    //
    useEffect(() => {
        //value input not empty mới được xử lý
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchService.search(debounceValue);
            setSearchResult(result);
            setLoading(false);
        };
        fetchAPI();
    }, [debounceValue]);
    //
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        e.target.value.startsWith(' ') || setSearchValue(e.target.value);
    };
    //
    return (
        <div>
            <HeadlessTippy
                // trigger="focus" // mặc định tippy hover show, extension click focus
                interactive // bỏ readonly
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchvalue}
                        placeholder="Search Account and Videos"
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchvalue && !loading && (
                        <button className={cx('btn-clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
