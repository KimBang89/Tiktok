import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

const SearchResult = memo(({ accountItems }) => {
    //
    return accountItems.map((result) => {
        return <AccountItem key={result.id} data={result} />;
    });
});
export default SearchResult;
