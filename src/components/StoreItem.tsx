import { Card } from "react-bootstrap"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgURL: string
}

export function StoreItem({ id, name, price, imgURL }: StoreItemProps) {

    return (
        <>
        <Card>
            <Card.Img variant="top" src={imgURL} height="300px" style={{ objectFit: "cover" }} />
        </Card>
        </>
    )
}