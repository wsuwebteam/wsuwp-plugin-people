import { TextControl, Button } from '@wordpress/components';

import './_style.scss';

const ChildDirectoryCard = ( props ) => {

    let {
        title = '',
        id = false,
        peopleIDs = [],
    } = props;


    let adminUrl = window.wsuPeopleData.adminUrl ?? '#';

    return (
        <li className="wsu-cpm-child-directory-card">
            <h3 className="wsu-cpm-child-directory-card__title">{ title }</h3>
            <span className="wsu-cpm-child-directory-card__count">People In Directory: <strong>{ peopleIDs.length }</strong></span>
            <a className="wsu-cpm-child-directory-card__edit" href={`${adminUrl}/post.php?post=${id}&action=edit`}>Edit Directory</a>
        </li>
    );

}

export default ChildDirectoryCard;