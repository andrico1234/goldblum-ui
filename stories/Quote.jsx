import { Card, Space } from 'antd'

export function Quote({ quote }) {
  return (
    <Space direction='vertical' size="middle" style={{ maxWidth: '400px' }}>
      <Card title="Goldblum says...">
        <p>{quote}</p>
      </Card>
    </Space>
  )
}