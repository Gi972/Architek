import glamorous from 'glamorous';
//import {colors} from '../../Styles';

export const Footer = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: "space-between",
  marginTop: '10px',
  borderTop: '1px solid #D7DBDD',
  padding: '10px'
})

export const FooterItem = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto'
})