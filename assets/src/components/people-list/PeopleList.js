import { 
    PersonCard
} from "../components";

import './_style.scss';


const PeopleList = ( props ) => {

    let {
        people,
        removePeopleIDs,
    } = props;

    let peopleArray = Array.isArray( people ) ? people : [];


    return (
        <ul className="wsu-cmp-people-list">
            { people.map( ( person ) => { return( <PersonCard {...person} removePerson={ ( value ) => {removePeopleIDs( [value]) } } />) } )}
        </ul>
    );

}

export default PeopleList;