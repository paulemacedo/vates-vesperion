import React from 'react'
import { GiCardPlay, GiCardJoker, GiHeraldicSun, GiEclipse } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa'

const iconMap = {
  GiCardPlay: GiCardPlay,
  GiCardJoker: GiCardJoker,
  GiHeraldicSun: GiHeraldicSun,
  GiEclipse: GiEclipse,
  FaHeart: FaHeart,
}

export const renderIcon = (iconType, props = {}) => {
  const IconComponent = iconMap[iconType]
  if (!IconComponent) return null
  
  return <IconComponent size={35} className="text-gold mx-auto m-4" {...props} />
}