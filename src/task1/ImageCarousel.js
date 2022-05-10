import React from "react";
import { fetchImages } from "../api/index";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircularProgress from "@mui/material/CircularProgress";

const ImageCarousel = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [images, setImages] = React.useState([]);
    const [shownImage, setShownImage] = React.useState(0);

    React.useEffect(async () => {
        try {
            setImages(await fetchImages());
        } catch (e) {
            console.log("Unable to fetch images", { e });
        }
        setIsLoading(false);
    }, []);

    return (
        <div data-testid="carousel-wrapper" style={{ display: "flex", alignItems: "center", gap: "10px"}}>
            {isLoading ? (
                <CircularProgress data-testid="carousel-loading" size={100} />
            ) : (
                <>
                    <ArrowLeftIcon
                        onClick={() =>
                            setShownImage(
                                (shownImage - 1 + images.length) % images.length
                            )
                        }
                        style={{ cursor: "pointer" }}
                    />
                    <img alt="carousel-image" src={images[shownImage]} width="400" height="400" />
                    <ArrowRightIcon
                        onClick={() =>
                            setShownImage((shownImage + 1) % images.length)
                        }
                        style={{ cursor: "pointer" }}
                    />
                </>
            )}
        </div>
    );
};
export default ImageCarousel;
