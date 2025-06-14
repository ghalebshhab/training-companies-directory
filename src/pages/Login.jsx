import React from 'react';
import styled from 'styled-components';
import '../pages/login.css';
const Form = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <h4 className="title">Log In!</h4>
        <form>
          <label className="field" htmlFor="logemail">
            <span className="input-icon">@</span>
            <input autoComplete="off" id="logemail" placeholder="Email" className="input-field" name="logemail" type="email" />
          </label>
          <label className="field" htmlFor="logpass">
            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
            </svg>
            <input id="logpass" placeholder="Password" className="input-field" name="logpass" type="password" />
          </label>
          <button className="btn" type="button">Login</button>
          <a className="btn-link">Forgot your password?</a>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #1f2029; /* Optional background */

  .card {
    --main-col: #ffeba7;
    --bg-col: #2a2b38;
    --bg-field: #1f2029;

    width: 300px;
    padding: 2rem;
    text-align: center;
    background: var(--bg-col);
    border-radius: 10px;
    border: 1px solid var(--main-col);
    user-select: none;
  }


  /*Inputs*/
  .field {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0.5rem;
    gap: 0.5rem;
    background-color: var(--bg-field);
    border-radius: 4px;
  }

  .input-icon {
    width: 1em;
    color: var(--main-col);
    fill: var(--main-col);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-field {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    color: var(--main-col);
    padding: 0.5em 1em 0.5em 0;
    caret-color: var(--main-col);
  }

  .filed:has(.input-field:valid) {
    border: 1px solid var(--main-col);
  }

  /*Text*/
  .title {
    margin-bottom: 1rem;
    font-size: 1.5em;
    font-weight: 500;
    color: var(--main-col);
    text-shadow: 1px 1px 20px var(--main-col);
    text-transform: uppercase;
  }

  /*Buttons*/
  .btn {
    margin: 1rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 0.6em 1.2em;
    background-color: var(--main-col);
    color: var(--bg-col);
    box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .btn-link {
    color: #f5f5f5;
    display: block;
    font-size: 0.75em;
    transition: color 0.3s ease-out;
  }

  /*Hover & focus*/
  .field input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .btn:hover {
    background-color: var(--bg-field);
    color: var(--main-col);
    box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
  }

  .btn-link:hover {
    color: var(--main-col);
    text-decoration: underline;
  }`;

export default Form;

 