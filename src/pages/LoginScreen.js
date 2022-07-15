import { useState } from "react";
import styled from "styled-components";

import { Input } from "../shared/Input";
import { ButtonLight, ButtonDark } from "../shared/Button";
import { Oval } from "react-loader-spinner";

export default function LoginScreen() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [enableButton, setEnableButton] = useState(true);
  return (
    <>
      <Form>
        <Input
          type="email"
          placeholder="jaimecinto_bunito@gmail.com"
          value={loginData.email}
          functionOnChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          id="email"
          autocomplete="autofocusoff"
          pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
          autoFocus={true}
        >
          Email
        </Input>
        <Input
          type="password"
          placeholder=""
          value={loginData.password}
          functionOnChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          id="senha"
          autocomplete="off"
        >
          Senha
        </Input>
        <ButtonLight width="250px">
          {enableButton ? (
            <p> Entrar </p>
          ) : (
            <Oval
              ariaLabel="loading-indicator"
              height={37}
              width={37}
              strokeWidth={8}
              color="rgb(255,101,0)"
              secondaryColor="#f05331"
            />
          )}
        </ButtonLight>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
  /* height: 100%; */
  /* button {
    margin: 20px 0;
  } */
`;
