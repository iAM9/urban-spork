import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'


const columnFileds = ['Item', 'Price', 'Image', 'Shop', 'Link']

const ProductTable = () => {
    return (
        <div>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>List of Product Details</TableCaption>
                    <Thead>
                        <Tr>
                            {columnFileds.map((field) => {
                                return <Th>{field}</Th>
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td>30.48</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductTable
