import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {fetchMapData} from "../RootReducer";


const jsonUrl = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';

export const useGeoData = () => {

    const dispatch = useDispatch();

  useEffect(() => {
    
    const fethcMapThunk = fetchMapData(jsonUrl);
    dispatch(fethcMapThunk);
    
     }, []);

};