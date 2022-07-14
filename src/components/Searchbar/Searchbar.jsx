import { Component } from "react";
import PropTypes from 'prop-types';
import { Formik } from "formik";
import { 
    SearchbarBox, 
    SearchInput, 
    SearchForm,
    ButtonSearch,
} from "./Searchbar-styled";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import Notiflix from "notiflix";


export class Searchbar extends Component {
    render(){
return (
    
    <SearchbarBox>
        <Formik
            initialValues={{ search: '' }}
            onSubmit={(values, actions) => {
            this.props.onSubmit(values.search);
            actions.setSubmitting(false);
            if (values.query.trim() === '') {
            return Notiflix.Notify.failure('Please, enter search query.');
          }}}
          
        >
        {({ isSubmitting }) => (
        <SearchForm>
        {isSubmitting && <div>Loading.</div>}
        <ButtonSearch 
        type="submit" 
        className="button" >
        <AiOutlineSearch size={40}/>
        </ButtonSearch>    
        <SearchInput 
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos" />
        </SearchForm>
        )}
        </Formik>
    </SearchbarBox>
  );
    };
};

export default Searchbar;


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}