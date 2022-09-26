import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { visitsCounter } from '../../utilities/visitsCounter'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export default function VisitsCharts ({ track }) {
  const counter = visitsCounter(track)
  const VisitDays = counter.map((item) => item.date)
  const VisitsCounts = counter.map((item) => item.visits)

  const data = {
    labels: VisitDays,
    datasets: [{
      label: 'Visits',
      data: VisitsCounts,
      fill: false,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 0.5)',
      pointBackgroundColor: 'rgba(53, 162, 235, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4,
      borderWidth: 8,
      pointRadius: 10,
      pointHoverRadius: 13,
      pointBorderWidth: 3,
      pointHoverBorderWidth: 5,
      pointStyle: 'circle'
    }]
  }

  const options = {
    resposive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            return context.parsed.y + ' visits'
          },
          title: function (context) {
            return context[0].label
          }
        },
        backgroundColor: 'rgba(33, 33, 33, 0.9)',
        borderWidth: 0,
        padding: 10,
        titleFont: {
          size: 14,
          family: '"Inter", san-serif',
          weight: '600'
        },
        bodyFont: {
          size: 14,
          family: '"Inter", san-serif',
          weight: '500'
        },
        displayColors: false,
        caretSize: 10,
        caretPadding: 10,
        cornerRadius: 5,
        xPadding: 10,
        yPadding: 10,
        position: 'nearest',
        titleAlign: 'center',
        titleMarginBottom: 10,
        bodyAlign: 'center',
        bodySpacing: 5
      },
      legend: {
        font: {
          size: 14,
          family: '"Inter", san-serif',
          weight: '500'
        },
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        beginAtZero: false,
        ticks: {
          color: '#212121',
          font: {
            size: 14,
            family: '"Inter", san-serif',
            weight: '600'
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawBorder: false
        },
        beginAtZero: true,
        ticks: {
          color: '#212121',
          font: {
            size: 12,
            family: '"Inter", san-serif',
            weight: '600'
          }
        }
      }
    }

  }

  return (
        <Line
          data={data}
          options={options}
        />
  )
}
