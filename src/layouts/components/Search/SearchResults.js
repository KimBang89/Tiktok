import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

function SearchResult({ acountItems }) {
    //
    return acountItems.map((result) => {
        return <AccountItem key={result.id} data={result} />;
    });
}

export default memo(SearchResult);
