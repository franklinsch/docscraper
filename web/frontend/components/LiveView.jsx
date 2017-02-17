import React from 'react';
import {Table} from 'react-materialize';

export default class LiveView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      values: [{
        name: "fs2014",
        latestProcess: "vim",
        latestComputer: "texel02",
        lastSeen: "2017-02-17"
      }]
    }
  }

  render() {
    const values = this.state.values || [];

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
            values.map((value) => {
              return (
                <tr>
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
