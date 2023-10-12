import { TextControl, Button } from '@wordpress/components';

import './_style.scss';

const PersonCard = ( props ) => {

    let {
        name = '',
        post_id = false,
        directoryID = false,
        title = [],
        removePerson,
        email = '',
        photo_sizes = {}
    } = props;

    let positionTitle = title.length ? title[0] : '';
    let adminUrl      = window.wsuPeopleData.adminUrl ?? '#';
    let imageUrl      =  photo_sizes && photo_sizes.hasOwnProperty('thumbnail') ? photo_sizes.thumbnail : '';


    return (
        <li className="wsu-gbe-people-editor__person-card">
            <div className="wsu-gbe-people-editor__person-card__button">
                <Button aria-label="Remove Person" onClick={ () => { removePerson( post_id ) } } >Remove X</Button>
            </div>
            <div className="wsu-gbe-people-editor__person-card__image">
                { imageUrl && <img src={ imageUrl } />}
            </div>
            <h3 className="wsu-gbe-people-editor__person-card__name">{ name }</h3>
            <div className="wsu-gbe-people-editor__person-card__title">{ positionTitle }</div>
            <div className="wsu-gbe-people-editor__person-card__email">{ email }</div>
            <a className="wsu-gbe-people-editor__person-card__edit" href={`${adminUrl}/post.php?post=${post_id}&action=edit`}>Edit Profile</a>
        </li>
    );

}

export default PersonCard;