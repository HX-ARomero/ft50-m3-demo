import styled from "styled-components";

const CustomDiv = styled.div`
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
`;

const Register = () => {
  return (
    <CustomDiv>
      <button>Ir al formulario de Registro</button>
    </CustomDiv>
  );
};

export default Register;
