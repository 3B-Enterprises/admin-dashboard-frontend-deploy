import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getChild} from '../../utils/requests';
import { Navbar } from '../Nav/Navbar';

export const Carne = () => {
    const [user,setUser] = useState([]);
    const params = useParams();

    const getUser = async ()=>{
        const resp = await getChild(params.identificacion);
        if (resp !== 404) {
            setUser(resp.data);
        }else{
            setUser(resp)
        }

    }

    useEffect(()=>{
        getUser();
    },[])

  if (user !== 404) {
    return (
      <div className="flex">
        <div className="hidden md:block h-screen w-1/6">
          <Navbar />
        </div>
        <div className="flex-1">
          <div className="shadow-md max-w-xs mx-auto text-center">
            <div className="bg-black">.</div>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="John"
              className="pt-4 w-1/2 mx-auto"
            />
            <h1 className="py-3 text-xl font-bold">
              {user.name + user.surname}
            </h1>
            <p className="my-2">
              <span className="font-bold">Consecutivo:</span> {user.consecutive}
            </p>
            <p className="outline-none py-2 text-black font-bold bg-orange-500 text-center cursor-pointer w-full text-lg">
              Información personal
            </p>
            <p className="my-3">
              <b>Identificación: </b> {user.identification}
            </p>
            <p className="my-3">
              <b>Edad: </b>
              {new Date().getFullYear() -
                new Date(user.dateOfBirth).getFullYear() ===
              new Date().getFullYear()
                ? "No registra"
                : new Date().getFullYear() -
                  new Date(user.dateOfBirth).getFullYear()}
            </p>
            <p className="my-3">
              <b>Sexo: </b> {user.sexo === "" ? "No registra" : user.sexo}
            </p>
            <p className="my-3">
              <b>Zona: </b> {user.zona === "" ? "No registra" : user.zona}
            </p>
            <p className="my-3">
              <b>Barrio: </b>
              {user.neighborhood === "" ? "No registra" : user.neighborhood}
            </p>
            <p className="my-3">
              <b>Dirección: </b>
              {user.address === "" ? "No registra" : user.address}
            </p>
            <p className="outline-none py-2 text-black font-bold bg-orange-500 text-center cursor-pointer w-full text-lg">
              Información familiar
            </p>
            <p className="my-3">
              <b>Madre: </b>
              {user.motherName === "" ? "Desconocido" : user.motherName}
            </p>
            <p className="my-3">
              <b>Padre: </b>
              {user.fatherName === "" ? "Desconocido" : user.fatherName}
            </p>
            <div className="bg-black">.</div>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div>
        <div className="flex flex-col w-2/4  mx-auto text-center my-10 align-middle">
          <h1 className="font-bold text-3xl ">404 Not found</h1>
          <p className="text-xl">El usuario no se encuentra registrado</p>
        </div>
      </div>
    );
  }
}
