import React from 'react';
import styled from 'styled-components';

const  CardContainer = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    width:'20.8rem',
    height:'auto',
    background:'#ffffff',
    boxShadow:'0px 0px 45px rgba(0, 0, 0, 0.15)',
    border:'none',
    padding:'35px 50px',

}))

const CardHeader = styled.div(props => ({
    fontSize:'1.5rem',
    lineHeight:'132%',
    color:'#001379',
    fontFamily:'Roboto',
    fontWeight:800,
    textTransform:'capitalizer',
    paddingBottom:'1.1rem',

}))

const InputContainer = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    marginBottom:'2.1rem'

}))

const InputLabel = styled.div(props => ({
    fontSize:'1.25rem',
    lineHeight:'132%',
    color:'#000000',
    fontFamily:'Roboto',
    fontWeight:500,
    textTransform:'capitalizer',
    paddingBottom:'0.8rem',
}))


const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }
`;

const SubmitButton = styled.div(props => ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#001379',
    color:'#ffffff',
    height:'46px',
    border:'none',
    cursor:'pointer',
    fontSize:'1.25rem',
    fontFamily:'Roboto',
    fontWeight:'500',
    lineHeight:'132%',

}))

const SelectField = styled.select`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }
  option {
    font-size: 16px;
    color: #000;
    background: #fff;
  }
`;

const Form = () => {
  return (
    <CardContainer>
      <CardHeader>Let us know you</CardHeader>

      <InputContainer>
        <InputLabel>Name*</InputLabel>
        <InputField type="text" placeholder="Eg: Jason Roy" />
      </InputContainer>

      <InputContainer>
        <InputLabel>Age*</InputLabel>
        <InputField type="number" placeholder="Eg: 30" />
      </InputContainer>

      <InputContainer>
        <InputLabel>Location*</InputLabel>
        <InputField type="text" placeholder="Enter your Location" />
      </InputContainer>

      <InputContainer>
        <InputLabel>Job Area Of Interest*</InputLabel>
        <SelectField>
          <option value="">Select an option</option>
          <option value="software-engineer">Software Engineer</option>
          <option value="data-analyst">Data Analyst</option>
          <option value="machine-learning-engineer">Machine Learning Engineer</option>
        </SelectField>
      </InputContainer>

      <SubmitButton>Submit Survey</SubmitButton>
    </CardContainer>
  );
};

export default Form;
