import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Sections(){
    const {filmId} = useParams()
    const [sectionInfo, setSectionInfo]=useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`);
        promise.then(response => {setSectionInfo(response.data)})
    }, [])

    return (
        <div>

        </div>
    )
}