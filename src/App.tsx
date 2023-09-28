import CapaAlbum from './assets/capa-album.jpg'
import { ArrowDownCircle, ArrowRight, Bell, ChevronLeft, ChevronRight, Home, Library, Plus, Search } from 'lucide-react'
import './app.css'
import {  } from 'react'

function App() {

    const listaPlaylist = [
        {id:0, name: 'Album', description: 'Playlist . Bruno Frohlich', img: CapaAlbum},
        {id:1, name: 'Album', description: 'Playlist . Bruno Frohlich', img: CapaAlbum},
        {id:2, name: 'Album', description: 'Playlist . Bruno Frohlich', img: CapaAlbum},
        {id:3, name: 'Album', description: 'Playlist . Bruno Frohlich', img: CapaAlbum},
        {id:4, name: 'Album', description: 'Playlist . Bruno Frohlich', img: CapaAlbum},
        {id:5, name: 'Album', description: 'Playlist . Bruno Frohlich', img: CapaAlbum},
    ]

  return (
    <div className='h-screen flex flex-col'>
        <div className='flex flex-1'>
            <div className='w-80 flex flex-col'>
                <aside className='h-[15%] rounded-lg m-1 bg-gray-default'>
                    <div className='flex flex-col p-[1.1rem] gap-4'>
                        <a className='text-zinc-400 text-[0.8rem] flex gap-4 items-center transition-colors font-bold hover:text-white'><Home size={19} /> Início</a>
                        <a className='text-zinc-400 text-[0.8rem] flex gap-4 items-center transition-colors font-bold hover:text-white'><Search size={19} /> Buscar</a>
                    </div>
                </aside>
                <aside className='flex-1 rounded-lg m-1 bg-gray-default p-3 pl-4 pr-4 flex flex-col'>
                    <div className='grid grid-cols-2'>
                        <div className='text-zinc-400 flex items-center gap-2'>
                            <Library size={21}/> <p className='text-[0.69rem] font-bold'>Sua Biblioteca</p>
                        </div>
                        <div className='flex justify-end gap-2 text-zinc-400'>
                            <Plus className='cursor-pointer' size={19}/> <ArrowRight className='cursor-pointer' size={19}/>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <a className='m-1 p-[6px] text-white bg-chip-back rounded-full text-[0.7rem]' href="">Playlists</a>
                        <a className='m-1 p-[6px] text-white bg-chip-back rounded-full text-[0.7rem]' href="">Artistas</a>
                        <a className='m-1 p-[6px] text-white bg-chip-back rounded-full text-[0.7rem]' href="">Podcastas e programas</a>
                    </div>
                    <div className='mt-4 flex-grow overflow-auto max-h-[24rem] custom-scrollbar'>
                        <div>
                            <div className='flex justify-between text-white m-2'>
                                <Search size={15}/> <p className='text-[0.7rem]'>Recentes</p>
                            </div>
                            {listaPlaylist.map(playlist => {
                                return (
                                    <div className='flex mt-2 gap-3 transition-colors cursor-pointer hover:bg-zinc-900' key={playlist.id}>
                                        <div>
                                            <img className='w-10 rounded-md' src={playlist.img} alt="" />
                                        </div>
                                        <div className='flex flex-col text-white gap-1 justify-center'>
                                            <p className='text-[0.75rem]'>{playlist.name}</p>
                                            <p className='text-[0.7rem] text-zinc-400'>{playlist.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </aside>
            </div>
            <main className='flex-1 m-1 rounded-lg bg-gray-default p-2 pl-5 pr-5'>
                <header className='flex justify-between w-full'>
                    <div className='flex text-white gap-2'>
                        <div className='p-1 bg-zinc-800 rounded-full'>
                            <ChevronLeft/> 
                        </div>
                        <div className='p-1 bg-zinc-800 rounded-full'>
                            <ChevronRight/>
                        </div>
                    </div>
                    <div className='text-white flex gap-2'>
                        <a className='rounded-xl flex items-center p-2 gap-2 text-[0.7rem] bg-zinc-800' href=""><ArrowDownCircle size={13}/> Instalar Aplicativo</a>
                        <div className='p-1 bg-zinc-800 rounded-full'>
                            <Bell />
                        </div>
                        <div className='p-1 bg-zinc-800 rounded-full'>
                            <img className='rounded-full w-6' src="http://github.com/brunopp00.png" alt="" />
                        </div>
                    </div>
                </header>
                <div>
                    <h1 className='text-white font-bold text-[1.5rem]'>Boa tarde</h1>
                    <div className='grid grid-cols-3 gap-2'>
                        {listaPlaylist.map(playlist => {
                            return(
                                <div key={playlist.id} className='cursor-pointer flex items-center transition-opacity text-white bg-zinc-500 bg-opacity-30 rounded-sm gap-3 hover:bg-opacity-50'>
                                    <img className='w-14 rounded-l-sm' src={playlist.img} alt="" />
                                    <p className='text-xs font-bold'>{playlist.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </main>
        </div>
        <footer className='h-16 p-1 pl-5 pr-5'>
            <div>
                <img className='w-12 rounded-sm' src={CapaAlbum} alt="" />
            </div>
        </footer>
    </div>
  )
}

export default App
