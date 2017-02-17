import React from 'react';
import Table from 'react-materialize';

export default class LiveView extends React.Component {

  const values = [
    {
      name: "fs2014",
      latestProcess: "vim",
      lastSeen: "2017-02-17"
    }
  ]

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th data-field="id">User</th>
            <th data-field="latestprocess">Latest Process</th>
            <th data-field="lastseen">Last Seen</th>
          </tr>
        </thead>

        <tbody> 
          {
            values.map((value) => {
                <tr>
                  <td>{value.name}</td>
                  <td>{value.latestProcess}</td>
                  <td>{value.lastSeen}</td>
                </tr>
            })
          }
        </tbody> 
      </Table>
    )
  }
}
