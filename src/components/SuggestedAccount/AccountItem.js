import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function SuggestedAccounts() {
    const renderPreview = ({ props }) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[500, 50]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/58b93986bef46431cdadb10e5d74f8e7~c5_100x100.jpeg?x-expires=1676275200&x-signature=neWC%2F9suVSKMoOOgYl%2BrKPnrL6g%3D"
                        alt="avatar"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>tiktok_award_offical</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Tiktok_Offical</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default SuggestedAccounts;
