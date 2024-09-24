import React from 'react';
import style from './Footer.module.css';

class Footer extends React.Component {
  state = {
    curYear : new Date().getFullYear(),
  }
  render() {
    return (
      <div className={style.FooterOverall}>
        <div className={style.FooterCopyright}>
          <p>© Зарегестрировано 2023-{this.state.curYear} ООО «Восток Гелиос» | Все права защищены | Ресурс заряжен на <a href="https://reactjs.org/" rel="noopener">React-JSX</a> | Программирование от <a href="https://it.0f.world" rel="noopener">it.0f.world</a></p>
        </div>
      </div>
    )
  }
}


export default Footer;
