import {
  AlignCenter,
  Heart,
  Maximize2,
  Mic2,
  MonitorSpeaker,
  PictureInPicture2,
  PlaySquare,
  Volume1,
} from 'lucide-react'

import {
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from '@phosphor-icons/react'
import CapaAlbum from '../../assets/capa-album.jpg'

export const FooterPage = () => {
  return (
    <footer className="h-16 p-1 pl-5 pr-5 flex">
      <div className="flex gap-4 w-[30%]">
        <img className="w-12 rounded-sm" src={CapaAlbum} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-white text-[0.7rem]">Album testeeee</p>
          <p className="text-gray-500 text-[0.6rem]">Mc teste, Mc teste</p>
        </div>
        <div className="flex items-center justify-center">
          <Heart className="text-white" size={14} />
        </div>
      </div>
      <div className="w-[40%] flex flex-col items-center justify-center gap-3">
        <div className="flex gap-4">
          <Shuffle className="text-gray-500" size={16} weight="fill" />
          <SkipBack className="text-gray-500" size={16} weight="fill" />
          <Play className="bg-white rounded-full" size={16} weight="fill" />
          <SkipForward className="text-gray-500" size={16} weight="fill" />
          <Repeat className="text-gray-500" size={16} weight="fill" />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-500 text-[0.6rem]">1:44</p>
          <div className="bg-white h-1 rounded-full w-[450px]">.</div>
          <p className="text-gray-500 text-[0.6rem]">1:44</p>
        </div>
      </div>
      <div className="w-[30%] flex justify-end items-center gap-2">
        <PlaySquare className="text-gray-500" size={16} />
        <Mic2 className="text-gray-500" size={16} />
        <AlignCenter className="text-gray-500" size={16} />
        <MonitorSpeaker className="text-gray-500" size={16} />
        <Volume1 className="text-gray-500" size={16} />
        <div className="bg-white h-1 rounded-full w-[80px]">.</div>
        <PictureInPicture2 className="text-gray-500" size={16} />
        <Maximize2 className="text-gray-500" size={16} />
      </div>
    </footer>
  )
}
