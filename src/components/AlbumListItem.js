import { GoTrash } from 'react-icons/go'
import { useRemoveAlbumMutation } from '../store'
import Button from './Button'
import Expandable from './Expandable'
import PhotosList from './PhotosList'

function AlbumListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation()
    
    const handleRemoveAlbum =()=> {
        removeAlbum(album)
    }
   const header = <div>
    <Button className='mr-2' isloading={results.isLoading} onClick={handleRemoveAlbum }> <GoTrash /></Button>
    {album.title} 
    </div>
   return (
         <Expandable key={album.id} header={header}>
            <PhotosList album={album} />   
         </Expandable>
          )  
}

export default AlbumListItem