import './_style.scss';

import PersonEditorCard from '../person-editor-card/PersonEditorCard';

const DirectoryPeople = ( props ) => {

    let {
        people,
        adminUrl,
    } = props;

    if ( false === people ) {
        people = [];
    }

    return (
        <ul className="wsu-gb-people">
            { people.map( ( person ) => { return( <PersonEditorCard {...person} />) } )}
        </ul>
    );
}

export default DirectoryPeople;