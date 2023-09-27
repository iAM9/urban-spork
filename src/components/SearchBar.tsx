import { Button, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = () => {
    return (
        <div style={{ display: 'flex', gap: "10px" }}>
            <Input placeholder='Search for product' size='lg' />
            <Button leftIcon={<SearchIcon />} variant='solid' size={"lg"} colorScheme='orange'>
                Search
            </Button>
        </div>
    )
}

export default SearchBar
