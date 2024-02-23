import { GoTrash } from 'react-icons/go'
import Button from './Button'
import { removeUser } from '../store'
import {useThunk } from '../hooks/use-thunk'
import Expandable from './Expandable'
import AlbumsList from './AlbumsList'


function UsersListItem({user}) {
  const [ doRemoveUser, isLoading, error ] =useThunk(removeUser)
     
  const handleClick = ( ) => {
    doRemoveUser(user)
  }


  const header = <>
                 <Button className="mr-3" loading={isLoading} onClick={ handleClick} >
                    <GoTrash />
                 </Button>
               { error && <div>Error deleting user.</div>} 
               { user.name }
  
               </>

  return (
     <Expandable  header={header}>
       <AlbumsList user={user} />
     </Expandable>    
  )
}

export default UsersListItem



