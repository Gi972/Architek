import glamorous from 'glamorous';
//import {colors} from '../../Styles';

  export const GlamoInput = glamorous.input({
  margin: 10,
  border: 'none',
  backgroundColor: 'rgb(244, 242, 249)',
  padding: '10px 20px',
},
  props => {
    return props.islast && { marginBottom: '30px' }
  });