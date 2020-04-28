import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchExchangeList } from 'redux/exchanges/actions';

import { Form } from 'semantic-ui-react';
import {
  Field,
  reduxForm,
} from 'redux-form';

import TextField from 'components/redux-form-adapters/TextField';
import SelectField from 'components/redux-form-adapters/SelectField';
import Button from 'components/elements/buttons/Button';

import validate from './validate';

import './AddPortfolioForm.css';


const AddPortfolioForm = props => {
  const {
    onClose,
    handleSubmit,
    valid,
    fetchExchangeList,
    exchangeList,
  } = props;

  useEffect(() => {
    fetchExchangeList();
  }, []);

  const submitForm = values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('exchangeId', values.exchangeId);
    console.log(values);
  };

  const exchangesOptions = exchangeList ? exchangeList.map(
      exchange => (
        { key: exchange._id, text: exchange.name, value: exchange._id }
      ),
    ) : [];

  return (
    <div className="add-portfolio-form__component">
      <Form
        onSubmit={handleSubmit(submitForm)}
      >
        <Field
          label="Portfolio Name:"
          component={TextField}
          name="name"
          type="text"
          placeholder="Name"
        />

        <Field
          label="Exchange:"
          component={SelectField}
          name="exchangeId"
          loading={exchangesOptions.length === 0}
          options={exchangesOptions}
          placeholder="Select Exchange"
          search
          firstSelected
          onBlur={(e) => e.preventDefault()}
        />

        <div className="buttons-block">
          <Button
            onClick={onClose}
          >
            CANCEL
          </Button>
          <Button
            submit
            disabled={!valid}
          >
            CREATE
          </Button>
        </div>
      </Form>
    </div>
  );
};

AddPortfolioForm.propTypes = {
  fetchExchangeList: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  exchangeList: PropTypes.arrayOf(PropTypes.shape),
};

AddPortfolioForm.defaultProps = {
  valid: null,
  exchangeList: null,
};

const mapStateToProps = state => (
  {
    exchangeList: state.exchangesReducer.exchangeList,
  }
);

export default connect(
  mapStateToProps,
  {
    fetchExchangeList,
  },
)(reduxForm({
  form: 'AddPortfolioForm',
  validate,
})(AddPortfolioForm));
