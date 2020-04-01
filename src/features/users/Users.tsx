import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Slices
import { fetchUsers, selectUsers } from './usersSlice'
import { User } from './User'
import { UserSkeleton } from './UserSkeleton'

// Components
import { SimpleGrid } from '@chakra-ui/core/dist'

export const Users = () => {
  const dispatch = useDispatch()
  const { entities: users, loading } = useSelector(selectUsers)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <SimpleGrid minChildWidth={'200px'} spacing={{ base: 2, tablet: 4 }}>
        {loading === 'pending' ? (
          <UserSkeleton />
        ) : (
          users.map((user, index) => <User key={index} user={user} />)
        )}
      </SimpleGrid>
    </>
  )
}
