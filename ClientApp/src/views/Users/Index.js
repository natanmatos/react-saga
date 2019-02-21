import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ListView from '../../components/Theme/ListView/Index';

import {fetchList} from '../../components/Theme/ListView/actions';

class Index extends Component {
  componentDidMount() {
    this.props.fetchList('users');
  }

  render() {
    const {list} = this.props;

    return (
      <Fragment>
        <ListView data={list} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listView.data
});

const mapDispatchToProps = dispatch => bindActionCreators({fetchList}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
