import { Avatar as AntdAvatar } from 'antd'
import happyImage from './assets/happy.jpg';
import suaveImage from './assets/suave.png';
import sexyImage from './assets/sexy.png';

const imageMap = {
  'happy': happyImage,
  'suave': suaveImage,
  'sexy': sexyImage,
}

export function Avatar({ mood = 'happy' }) {
  const src = imageMap[mood]

  return (
    <AntdAvatar size="large" src={src} />
  )
}
