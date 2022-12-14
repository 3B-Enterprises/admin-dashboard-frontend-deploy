import { Grid } from "gridjs-react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { h } from "gridjs";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { Modal } from "../Modal/Modal";
import "gridjs/dist/theme/mermaid.css";

export const Table = ({ data }) => {
  const navigate = useNavigate();
  const [modalOn,setModalOn] = useState(false);
  const [choice,setChoice] = useState(false);
  const [dataChildren, setData] = useState([{nombre:'',identificación:'',estado:''}])

  useEffect(()=>{
    setData(data)
  },[])

  const warning = ()=>{
    setModalOn(true)
  }
  return (
    <div className="justify-center">
      <Grid
        data={data}
        columns={[
          "Consecutive",
          "Name",
          "Surname",
          "Identification",
          "Estado",
          {
            name: "Detalle",
            formatter: (cell, row, data) => {
              return h(
                "button",
                {
                  className:
                    "py-2 px-4 px-auto border rounded-md text-white bg-orange-400",
                  onClick: () => {
                    navigate(`/detail/${row.cell(3).data}`);
                  },
                },
                "Detalle"
              );
            },
          },
          {
            name: "Editar",
            formatter: (cell, row) => {
              return h(
                "button",
                {
                  className:
                    "py-2 px-4 px-auto border rounded-md text-white bg-orange-400",
                  onClick: () => {
                    navigate(`/edit/${row.id}`);
                  },
                },
                "Editar"
              );
            },
          },
          {
            name: "Eliminar",
            formatter: (cell, row) => {
              return h(
                "button",
                {
                  className:
                    "py-2 px-4 px-auto border rounded-md text-white bg-red-600",
                  onClick: () => {
                    warning();
                  },
                },
                "Eliminar"
              );
            },
          },
        ]}
        search={true}
        sort={true}
        pagination = {{
          enabled: true,
          limit:20
        }
        }
        className={{
          table: "overflow-y-auto my-5 justify-center w-full",
          td: "w-28 border border-solid border-black",
          th: "text-center w-20 border border-solid border-black cursor-pointer text-md bg-orange-500 text-white",
          container: 'mt-5',
          header: {},
        }}
      />
      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
  );
};
