import { ArrowDownCircle, Bell, ChevronLeft, ChevronRight } from 'lucide-react'
import CapaAlbum from '../../assets/capa-album.jpg'
export const MainPage = () => {
  const listaAlbuns = [
    {
      id: 0,
      name: 'Album',
      description: 'Playlist . Bruno Frohlich',
      img: CapaAlbum,
    },
    {
      id: 1,
      name: 'Album',
      description: 'Playlist . Bruno Frohlich',
      img: CapaAlbum,
    },
    {
      id: 2,
      name: 'Album',
      description: 'Playlist . Bruno Frohlich',
      img: CapaAlbum,
    },
    {
      id: 3,
      name: 'Album',
      description: 'Playlist . Bruno Frohlich',
      img: CapaAlbum,
    },
    {
      id: 4,
      name: 'Album',
      description: 'Playlist . Bruno Frohlich',
      img: CapaAlbum,
    },
    {
      id: 5,
      name: 'Album',
      description: 'Playlist . Bruno Frohlich',
      img: CapaAlbum,
    },
  ]
  const listaHits = [
    {
      id: 0,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 1,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 2,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 3,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 4,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 5,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 6,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 7,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 8,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 9,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 10,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 11,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 12,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 13,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
    {
      id: 14,
      name: 'Album',
      description: 'Album de musicas teste que são feitos apenas para teste',
      img: CapaAlbum,
    },
  ]

  return (
    <main className="flex-1 m-1 rounded-lg bg-gray-default p-2 pl-5 pr-5 overflow-auto max-h-[89vh] custom-scrollbar">
      <header className="flex justify-between w-full">
        <div className="flex text-white gap-2">
          <div className="p-1 bg-zinc-800 rounded-full">
            <ChevronLeft />
          </div>
          <div className="p-1 bg-zinc-800 rounded-full">
            <ChevronRight />
          </div>
        </div>
        <div className="text-white flex gap-2">
          <a
            className="rounded-xl flex items-center p-2 gap-2 text-[0.7rem] bg-zinc-800"
            href=""
          >
            <ArrowDownCircle size={13} /> Instalar Aplicativo
          </a>
          <div className="p-1 bg-zinc-800 rounded-full">
            <Bell />
          </div>
          <div className="p-1 bg-zinc-800 rounded-full">
            <img
              className="rounded-full w-6"
              src="http://github.com/brunopp00.png"
              alt=""
            />
          </div>
        </div>
      </header>
      <div>
        <h1 className="text-white font-bold text-[1.5rem]">Boa tarde</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {listaAlbuns.map((playlist) => {
            return (
              <div
                key={playlist.id}
                className="cursor-pointer flex items-center transition-opacity text-white bg-zinc-500 bg-opacity-30 rounded-sm gap-3 hover:bg-opacity-50"
              >
                <img className="w-14 rounded-l-sm" src={playlist.img} alt="" />
                <p className="text-xs font-bold">{playlist.name}</p>
              </div>
            )
          })}
        </div>
        <h1 className="text-white font-bold text-[1.3rem]">Hora do hit!</h1>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          {listaHits.map((playlist) => {
            return (
              <div
                key={playlist.id}
                className="bg-zinc-900 p-2 rounded-md gap-3 flex flex-col"
              >
                <div>
                  <img
                    className="rounded-md w-full"
                    src={playlist.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[0.8rem] font-bold text-white">
                    {playlist.name}
                  </p>
                  <p className="text-[0.7rem] font-bold text-gray-400">
                    {playlist.description.length > 40
                      ? `${playlist.description.slice(0, 40)}...`
                      : playlist.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
