import './_style.scss';
import { TextControl, Button } from '@wordpress/components';


const SearchResultPerson = ( props ) => {

    let {
        displayName,
        isAdd = false,
        id,
        adminUrl,
        onClick,
    } = props;

    return (
        <li><Button className="wsu-gb-people-directory wsu-gb-people-directory__add" onClick={ () => { onClick( id ) } }>{displayName}</Button></li>
    );
}

export default SearchResultPerson;