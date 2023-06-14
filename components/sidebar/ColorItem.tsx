import { useState, useEffect } from 'react'

type ColorItemProps = {
  color: string
  setFolderColor: (color: string) => void
  selectedColor: string
}

const ColorItem: React.FC<ColorItemProps> = ({ color, setFolderColor, selectedColor }) => {
  const [isSelected, setSelected] = useState(false)

  const handleSetFolderColor = (color: string) => {
    setSelected(true)
    setFolderColor(color)
  }

  useEffect(() => {
    setSelected(selectedColor === color)
  }, [selectedColor, color])

  return (
    <div
      style={{ background: color }}
      className={isSelected ? 'sidebar__color-item active' : ''}
      onClick={() => handleSetFolderColor(color)}
    />
  )
}

export default ColorItem
