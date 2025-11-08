import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Dashboard() {
  const venueData = [
    { month: "Jan", venues: 4 },
    { month: "Feb", venues: 6 },
    { month: "Mar", venues: 3 },
    { month: "Apr", venues: 8 },
    { month: "May", venues: 5 },
    { month: "Jun", venues: 7 },
  ];

  const speakerData = [
    { month: "Jan", speakers: 10 },
    { month: "Feb", speakers: 15 },
    { month: "Mar", speakers: 12 },
    { month: "Apr", speakers: 18 },
    { month: "May", speakers: 20 },
    { month: "Jun", speakers: 17 },
  ];
  return (
    <div>
    <h1 className='text-center'>Admin panel</h1>
    <div className="container-fluid mt-4">
      <h3 className="mb-4 fw-bold text-primary">Dashboard Overview</h3>

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-header bg-primary text-white fw-semibold">
              Venue Growth Overview
            </div>
            <div className="card-body" style={{ height: "350px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={venueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="venues"
                    stroke="#007bff"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-header bg-success text-white fw-semibold">
              Speaker Registration Trends
            </div>
            <div className="card-body" style={{ height: "350px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={speakerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="speakers"
                    stroke="#28a745"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    

  )
}

export default Dashboard
