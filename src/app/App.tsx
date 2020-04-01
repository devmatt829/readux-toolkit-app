import React from 'react'
import { useDispatch } from 'react-redux'
import { GoMarkGithub } from 'react-icons/go'

// Slices
import { fetchUsers } from 'features/users/usersSlice'

// Features
import { ActionCounter } from 'features/actionCounter'
import { Counter } from 'features/counter'
import { TodoList } from 'features/todos'
import { Users } from 'features/users/Users'

// Components
import { Box, Button, Flex, Heading, Link, Stack } from '@chakra-ui/core/dist'
import { AppLayout, ElevatedBox, Inner } from 'components'

const App = () => {
  const dispatch = useDispatch()

  return (
    <AppLayout py={10}>
      <Stack spacing={8}>
        <Inner display={'flex'} alignItems={'center'}>
          <ActionCounter />

          <Link
            href="https://github.com/christofferberg/react-redux-toolkit-example"
            isExternal
            ml={'auto'}
          >
            <Box as={GoMarkGithub} size={'25px'} />
          </Link>
        </Inner>

        <Inner>
          <ElevatedBox>
            <Heading mb={8} fontSize={'xl'}>
              Counter example
            </Heading>
            <Counter />
          </ElevatedBox>
        </Inner>

        <Inner>
          <ElevatedBox>
            <Heading mb={8} fontSize={'xl'}>
              Todos example
            </Heading>
            <TodoList />
          </ElevatedBox>
        </Inner>

        <Inner>
          <ElevatedBox>
            <Flex align={'center'} mb={8}>
              <Heading fontSize={'xl'}>Users example</Heading>

              <Button onClick={() => dispatch(fetchUsers())} size={'sm'} ml={'auto'}>
                Fetch users
              </Button>
            </Flex>

            <Users />
          </ElevatedBox>
        </Inner>
      </Stack>
    </AppLayout>
  )
}

export default App
