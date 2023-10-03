import { TextControl, Button, SelectControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { 
    getTaxonomies,
    getTaxonomyTerms,
    getPeopleIDsFromTaxonomy,
} from '../../utilities/utilities';






const PeopleAddEditorAdvanced = ( props ) => {

    const [taxonomy, setTaxonomy]         = useState('');
    const [taxonomyList, setTaxonomyList] = useState([]);
    const [termList, setTermList]          = useState([]);
    const [term, setTerm]                 = useState('');

    let {
        directory,
        peopleIDs,
        addPeopleIDs
    } = props;

    useEffect( () => {

        getTaxonomies( setTaxonomyList );
        
    }, [] );

    useEffect( () => {

        getTaxonomyTerms( taxonomy, setTermList );
        
    }, [taxonomy] );

    let defaultSelect = [ { label:'Select', value:''} ]

    let taxonomyOptions = defaultSelect.concat( taxonomyList );
    let termOptions = defaultSelect.concat( termList );

    return (
        <div>
            <div>
            <SelectControl
                label='Taxonomy'
                value={ taxonomy }
                options={ taxonomyOptions }
                onChange={ ( value ) => setTaxonomy( value ) }
            />
            <SelectControl
                label='Term'
                value={ term }
                options={ termOptions }
                onChange={ ( value ) => { setTerm( value )} }
            />
                <Button
                    onClick={ () => { getPeopleIDsFromTaxonomy( taxonomy, term, addPeopleIDs ) } }
                    >Import People</Button>
            </div>
        </div>
    );

}

export default PeopleAddEditorAdvanced;