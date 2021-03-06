import {
  IoAccessibilityOutline,
  IoReceiptOutline,
  IoDesktopOutline
} from 'react-icons/io5';

import { Container, TopLine } from './styles';

export function Card({ title, subtitle, iconType, backColor, openModal }) {
  let icon;

  if (iconType === 'client') {
    icon = <IoAccessibilityOutline />;
  } else if (iconType === 'product') {
    icon = <IoDesktopOutline />;
  } else {
    icon = <IoReceiptOutline />;
  }

  return (
    <Container onClick={() => openModal()} backColor={backColor}>
      <TopLine>
        <h1> {title} </h1>
        {icon}
      </TopLine>
      <strong> {subtitle} </strong>
    </Container>
  );
}
