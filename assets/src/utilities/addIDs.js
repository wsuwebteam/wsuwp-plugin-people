import { deDupArray } from './utilities';

const addIDs = ( currentIDs, addIDs ) => {

  let updatedPeopleIDs = deDupArray( currentIDs.concat( addIDs ) );

  return updatedPeopleIDs;

}

export default addIDs;