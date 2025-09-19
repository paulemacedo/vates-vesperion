import React from 'react'
import { FaQuestionCircle, FaQuestion, FaCompass, FaMapMarkedAlt, FaFire, FaDirections, FaBookOpen, FaLightbulb, FaMoneyBillWave, FaBriefcase, FaRocket } from 'react-icons/fa'
import { BsBullseye, BsCalendarMonth, BsSunrise } from 'react-icons/bs'
import { GiGreekTemple, GiCrossroad, GiBridge, GiMirrorMirror, GiPortal, GiCardPlay, GiCardJoker, GiHeraldicSun, GiEclipse } from 'react-icons/gi'
import { RiHeartAddLine } from 'react-icons/ri'

const iconMap = {
  FaQuestionCircle,
  FaQuestion,
  FaCompass,
  FaMapMarkedAlt,
  FaFire,
  FaDirections,
  FaBookOpen,
  FaLightbulb,
  FaMoneyBillWave,
  FaBriefcase,
  FaRocket,
  BsBullseye,
  BsCalendarMonth,
  BsSunrise,
  GiGreekTemple,
  GiCrossroad,
  GiBridge,
  GiMirrorMirror,
  GiPortal,
  GiCardPlay,
  GiCardJoker,
  GiHeraldicSun,
  GiEclipse,
  RiHeartAddLine,
}

export const renderIcon = (iconType, props = {}) => {
  const IconComponent = iconMap[iconType]
  if (!IconComponent) return null
  return <IconComponent size={35} className="text-gold mx-auto m-4" {...props} />
}