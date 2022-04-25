import React from 'react'

export default function ApiRfc(props) {

  
  return (
    <div className='container'>
      <h3 className='text-center display-4'>To do list</h3>
      <div className='d-flex justify-content-center'>
        <table className='table w-50 text-center'>
          <tbody>
            <tr>
              <td>Tập thể dục</td>
              <td>
                <span class="badge badge-danger">incomplete</span>
                <span class="fa fa-check ml-2 text-success" style={{ fontSize: 25 }}></span>
              </td>
            </tr>
            <tr>
              <td>Làm bài tập</td>
              <td>
                <span class="badge badge-danger">incomplete</span>
                <span class="fa fa-check ml-2 text-success" style={{ fontSize: 25 }}></span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Tập thể dục</td>
              <td>
                <span class="badge badge-success">Complete</span>
              </td>
            </tr>
            <tr>
              <td>Làm bài tập</td>
              <td>
                <span class="badge badge-success">Complete</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
