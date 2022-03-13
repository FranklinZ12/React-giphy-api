import { getGift } from "api/getGifts";
import { useEffect, useState } from "react"

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGift(category)
            .then(images => {
                setState({ data: images, loading: false })
            })
    }, [category]);

    return state;
}