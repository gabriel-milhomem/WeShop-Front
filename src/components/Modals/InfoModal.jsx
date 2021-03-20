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

export default function InfoModal({ isOpen, onRequestClose }) {
  const { orders, currentOrderView } = useContext(AppContext);

  const order = orders?.find(order => order.id === currentOrderView);
  const client = order?.client;
  const products = order?.products;

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <InfoSection>
        <Title> Revisar pedido </Title>
        <hr />
        <List>
          <li>
            <span>Nome: </span>
            <p> {client?.name}</p>
          </li>
          <li>
            <span>Email: </span>
            <p>{client?.email}</p>
          </li>
          <li>
            <span>Telefone: </span>
            <p>{client?.phone}</p>
          </li>
          <li>
            <span>Data de nascimento: </span>
            <p>{client?.birthDate}</p>
          </li>
        </List>
        <hr />
        <Subtitle> Compras </Subtitle>
        <List>
          {products?.map(({ id, price, quantity, name, partialValue }) => (
            <li key={id}>
              <span>
                {name}
                <MathPrice>
                  {`(${quantity} un R$ ${price
                    .toString()
                    .replaceAll('.', ',')})`}
                </MathPrice>
              </span>
              <p> {`R$ ${partialValue.toString().replaceAll('.', ',')}`} </p>
            </li>
          ))}
        </List>
        <hr />
        <LastLine>
          <Subtitle> Total </Subtitle> <Total> {order?.total} </Total>
        </LastLine>
      </InfoSection>
    </Modal>
  );
}
