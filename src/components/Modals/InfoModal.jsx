import { useContext } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
import {
  InfoSection,
  Subtitle,
  Title,
  Total,
  LastLine,
  MathPrice,
  List
} from './styles';
Modal.setAppElement('#root');

export default function InfoModal() {
  const { orders } = useContext(AppContext);
  const { infoModal, setInfoModal } = useContext(AppContext);

  function handleCloseInfoModal() {
    setInfoModal(!infoModal);
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={infoModal}
      onRequestClose={handleCloseInfoModal}
    >
      <InfoSection>
        <Title> Revisar pedido </Title>
        <hr />
        <List>
          <li>
            <span>Nome: {} </span>
            <p> Gabriel </p>
          </li>
          <li>
            <span>Email: </span>
            <p>gabs@gabs.com</p>
          </li>
          <li>
            <span>Telefone: </span>
            <p>45 34534-3453</p>
          </li>
          <li>
            <span>Data de nascimento: </span>
            <p>23/23/12</p>
          </li>
        </List>
        <hr />
        <Subtitle> Compras </Subtitle>
        <List>
          <li>
            <span>
              {' '}
              Celular <MathPrice>3 un x 29.34 </MathPrice>{' '}
            </span>{' '}
            <p> R$ 23,00</p>
          </li>
          <li>
            <span>
              {' '}
              Celular <MathPrice> 3un x 23.32 </MathPrice>
            </span>{' '}
            <p> R$ 23,00</p>
          </li>
        </List>
        <hr />
        <LastLine>
          <Subtitle> Total </Subtitle> <Total> R$ 2343</Total>
        </LastLine>
      </InfoSection>
    </Modal>
  );
}
