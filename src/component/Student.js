import React from 'react'

const Student = (props) => {
    // console.log(props.data)
    return (
        <tr>
              <td>1</td>
              <td>SV002</td>
              <td>Nguyễn Văn B</td>
              <td>21</td>
              <td>Nữ</td>
              <td>
                <div className="template-demo">
                  <button type="button" className="btn btn-danger btn-icon-text">
                    Xem
                  </button>
                  <button type="button" className="btn btn-warning btn-icon-text">
                    Sửa
                  </button>
                  <button type="button" className="btn btn-success btn-icon-text">
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
    )
}

export default Student