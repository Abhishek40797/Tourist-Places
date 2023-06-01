import { Button, Card, CardBody, CardFooter, CardImage, H4, I } from "../StyledComponents/Styling"
import { ReservationData } from "../data/ReservationData"

export const ReservationC = ()=>{
    return (
        <>
            {
                ReservationData.map((data,i)=>{
                    return (
                        i<8 && <Card>
                            <CardImage src={data.image} alt="" />
                            <CardBody>
                                <H4>{data.text1}</H4>
                                <h6><i className="fa-solid fa-location-dot"></i> {data.text2}</h6>
                                <div className="flex justify-between">
                                    <p><I color="yellow" className="fa-solid fa-star"></I> (5.0) Reviews</p>
                                    <Button bg="#00BFFF" text="#FFF">Book a Trip</Button>
                                </div>
                                <CardFooter className="flex justify-between">
                                    <div className="card-footer-left d-flex">
                                        <img src="assets/asset 10.png" alt="" />
                                        <div className="footer-text">
                                            <h6>Sher Nadir</h6>
                                            <p>Gulder</p>
                                        </div>
                                    </div>
                                    <div className="card-footer-right">
                                        <i className="fa-regular fa-envelope"></i>
                                        <i className="fa-solid fa-phone"></i>
                                    </div>                            
                                </CardFooter>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </>
    )
}