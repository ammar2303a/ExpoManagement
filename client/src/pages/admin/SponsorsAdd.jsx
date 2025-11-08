import React from 'react'

function SponsorsAdd() {
  return (
    <div>
      <h2 className='text-center'>
        Manage Sponsors
      </h2>

      <div className="container-fluid mt-4">
  <div className="card shadow-sm border-0 rounded-3">
    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h5 className="mb-0 text-light">Table Title</h5>
      <span className="badge bg-light text-primary">Total Sponsors: 0</span>
    </div>

    <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table table-striped table-sm align-middle mb-0">
          <colgroup>
            <col style={{ minWidth: '150px' }} /> {/* Column 1 */}
            <col style={{ minWidth: '200px' }} /> {/* Column 2 */}
            <col style={{ minWidth: '150px' }} /> {/* Column 3 */}
            <col style={{ minWidth: '150px' }} /> {/* Column 4 */}
          </colgroup>

          <thead className="table-light">
            <tr>
              <th scope="col" className="text-nowrap">Column 1</th>
              <th scope="col" className="text-nowrap">Column 2</th>
              <th scope="col" className="text-nowrap">Column 3</th>
              <th scope="col" className="text-nowrap">Column 4</th>
            </tr>
          </thead>

          <tbody>
            {/* Example Row — Future Mapping Yahan Aayegi */}
            <tr>
              <td className="fw-semibold text-nowrap">---</td>
              <td className="text-nowrap">---</td>
              <td className="text-nowrap">---</td>
              <td className="text-nowrap">---</td>
            </tr>

            {/* No Data Message */}
            <tr>
              <td colSpan="4" className="text-center text-muted py-4">
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default SponsorsAdd
