import { useEffect, useState } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { fetchFurniture } from "../service/Request";
import './ProductPage.css';

export const ProductPage = () => {
    const [furniture, setFurniture] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetchFurniture().then((data) => setFurniture(data));
        }, 5000);
    }, [])

    useEffect(() => {
        if (furniture) {
            setIsLoading(false);
        }
    }, [furniture])

    return (

        <TableContainer className="FurnitureList">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        furniture?.map((item) => {
                            const { id, name, price, description } = item;
                            return (
                                <TableRow key={id}>
                                    <TableCell>{id}</TableCell>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{price}</TableCell>
                                    <TableCell>{description}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            {isLoading &&
                (<img src="loading.png" alt="Loading"></img>)
            }
        </TableContainer>
    )
}