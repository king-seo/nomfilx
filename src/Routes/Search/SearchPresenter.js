import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 20px;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;
const Input = styled.input`
  all: unset;
  font-size: 20px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Show..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
  </Container>
);

SearchPresenter.prototype = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
