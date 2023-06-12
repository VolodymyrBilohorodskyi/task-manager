import { useState } from 'react'

type ColorItem = {
  color: string
  setFolderColor: (str: string) => void
  count: number
}
const ColorItem: React.FC<ColorItem> = ({ color, setFolderColor, count }) => {
  const [isSelected, setSelected] = useState(false)

  const handleSetFolderColor = (color: string) => {
    setSelected((current) => !current)
    setFolderColor(color)
  }

  return (
    <div
      style={{ background: `${color}` }}
      className={isSelected ? 'selected' : ''}
      onClick={() => handleSetFolderColor(color)}
    ></div>
  )
}
export default ColorItem
