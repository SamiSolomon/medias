import { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "../store"
import Skeleton from './Skeleton'
import Expandable from "./Expandable";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";
import PhotosList from "./PhotosList";


function AlbumsList({ user }) {

const {data, error, isFetching} = useFetchAlbumsQuery(user)
const [addAlbum, results] = useAddAlbumMutation()

const handleAddAlbum = () => {
    addAlbum(user)
    }

let content;
if(isFetching){
    content = <Skeleton  times={4} />
}else if (error){
    content = <div>Error detecting  album.</div>
} else {
    content = data.map((album) =>{
      return <AlbumListItem key={album.id} album={album} /> 
}) 

return <div>
   <div className="m-2 flex flex-row items-center justify-between ">
    <h3 className="text-lg font-bold"> Abums for {user.name} </h3>
       <Button loading={results.isLoading} onClick={ handleAddAlbum }>
         + Add Album 
       </Button>
    </div>
    <div> {content}</div>
    
</div>
}}


export default AlbumsList