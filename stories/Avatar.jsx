import { Avatar as AntdAvatar } from 'antd'

const imageMap = {
  'happy': "https://i.ibb.co/2SVwTK0/happy.jpg",
  'suave': "https://i.ibb.co/h9XjRy0/suave.png",
  'sexy': "https://i.ibb.co/m8Z2Bxm/sexy.png",
}

export function Avatar({ mood = 'happy' }) {
  const src = imageMap[mood]

  return (
    <AntdAvatar size="large" src={src} />
  )
}
