import React from 'react';
import {Table} from 'react-materialize';

export default class LiveView extends React.Component {

  static propTypes = {
    values: React.PropTypes.array
  }

  render() {
    const values = this.props.values || [];

    return (
      <Table>
        <thead>
          <tr>
            <th data-field="id">User</th>
            <th data-field="latestprocess">Latest Process</th>
            <th data-field="latestprocess">Latest Computer</th>
            <th data-field="lastseen">Last Seen</th>
          </tr>
        </thead>

        <tbody> 
          {
            values.map((value, i) => {
              return (
                <tr key={i}>
                  <td>{value.name}</td>
                  <td>{value.latestProcess}</td>
                  <td>{value.latestComputer}</td>
                  <td>{value.lastSeen}</td>
                </tr>
              )
            })
          }
        </tbody> 
      </Table>
    )
  }
}
