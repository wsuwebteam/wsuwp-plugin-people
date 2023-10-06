import { TextControl, Button } from '@wordpress/components';

import './_style.scss';

const PersonSearchResult = ( props ) => {

    let {
        name = '',
        post_id = false,
        directoryID = false,
        title = [],
        removePerson,
        email = '',
        addPerson,
    } = props;

    let positionTitle = title.length ? title[0] : '';

    return (
        <li className="wsu-gbe-people-editor__person-search-card">
            <Button onClick={ () => { addPerson( post_id ) } } >
                { name }<span className="wsu-gbe-people-editor__person-search-card__title">{ title}</span>
            </Button></li>
    );

}

export default PersonSearchResult;