import React, {Component, Fragment} from 'react';
import './styles.css';

class ListView extends Component {
  render() {
    const {data} = this.props;

    return (
      <Fragment>
        <ul className="list">
          {
            data && data.map(item => (
              <li key={item.id} className="list__item">
                <span>{item.name}</span>
                <span>{item.email}</span>
                <span className="list__item___actions">
                  <button className="btn btn-sm btn-primary"><i className="fa fa-eye"/></button>
                  <button className="btn btn-sm btn-success"><i className="fa fa-pencil"/></button>
                  <button className="btn btn-sm btn-danger"><i className="fa fa-trash"/></button>
                </span>
              </li>
            ))
          }
        </ul>
        {data.loading && <p>Carregando...</p>}
      </Fragment>
    );
  }
}

export default ListView;
