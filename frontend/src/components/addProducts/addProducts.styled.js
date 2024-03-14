import styled from "styled-components";
export const StyledAddProducts = styled.form`
  input {
    background-color: var(--bg-alt);
    min-width: 200px;
    min-height: 20px;
  }

  button {
    border-radius: 5px;
    background-color: var(--accent5);
    width: 200px;
    margin-top: 20px;
    margin-left: 20px;
  }

  .inputsBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-top: 20px;
  }

  label {
    text-transform: uppercase;
    font-weight: 700;
    margin-left: 5px;
    margin-top: 20px;
  }

  .descrption {
    white-space: nowrap;
    height: 250px;
    width: 200px;
    /* display: block; */
  }
  UploadImage {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: nowrap;
  }

  .box {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 20px;
    display: flex;
  }
  textarea {
    resize: vertical; /* дозволяємо вертикальне зміщення розміру */
    overflow: auto; /* додаємо прокрутку, якщо текст перевищує область */
    height: 250px; /* Мінімальна висота */
    min-width: 200px;
    padding: 5px 5px; /* Максимальна висота, за бажанням */
  }
`;
