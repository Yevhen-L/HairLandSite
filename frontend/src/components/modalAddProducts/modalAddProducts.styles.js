import styled from "styled-components";

// Стилізований компонент для кнопки "Відкрити"
const OpenButton = styled.div`
  cursor: pointer;
`;

// Стилізований компонент для модального вікна
const ModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 600px;
  height: 400px;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
export default { OpenButton, CloseButton, ModalContent, ModalContainer };
