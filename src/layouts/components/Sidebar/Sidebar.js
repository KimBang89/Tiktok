import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import * as icons from '~/components/icons';
import SuggestedAccounts from '~/components/SuggestedAccount/SuggestedAccounts';
import * as userService from '~/services/userService';
//
const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;
//
function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    //
    useEffect(() => {
        const fetchAPI = async () => {
            let data = await userService.getSuggested({ page, perPage: PER_PAGE });
            setSuggestedUsers((prev) => [...prev, ...data]);
        };
        fetchAPI();
        // userService
        //     .getSuggested({ page, perPage: PER_PAGE })
        //     .then((data) => setSuggestedUsers((prev) => [...prev, ...data]))
        //     .catch((err) => console.log(err));
    }, [page]);
    const handleSeeAll = () => {
        setPage(page + 1);
    };
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title={'For you'}
                    to={config.routes.home}
                    icon={<icons.HomeIcon />}
                    activeIcon={<icons.HomeIconActive />}
                />
                <MenuItem
                    title={'Following'}
                    to={config.routes.following}
                    icon={<icons.UserGroupIcon />}
                    activeIcon={<icons.UserGroupIconActive />}
                />
                <MenuItem
                    title={'LIVE'}
                    to={config.routes.live}
                    icon={<icons.LiveIcon />}
                    activeIcon={<icons.LiveIconActive />}
                />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} onSeeAll={handleSeeAll} />
            {/* <SuggestedAccounts label="Following accounts" data={suggestedUsers} /> */}
        </aside>
    );
}
export default Sidebar;
