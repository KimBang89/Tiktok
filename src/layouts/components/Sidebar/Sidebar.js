import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import * as icons from '~/components/icons';
//
const cx = classNames.bind(styles);
//
function Sidebar() {
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
        </aside>
    );
}
export default Sidebar;
