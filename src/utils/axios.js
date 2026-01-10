import axios from "axios";

const instance = axios.create({

    baseURL : "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTM3OTQ5NjhkYmM0Y2QyNjM5N2EwYTg4ZGU5MTg4ZCIsIm5iZiI6MTc2Nzk4NDY0Ni44NSwic3ViIjoiNjk2MTRlMDZlOTVkMzA3MzVmMzY0MzYyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.rBifviQ23q-JEcIXCtNuqV_zrkQFlUzKBpvSSQR-0YU'
  }
    
})

export default instance;

 