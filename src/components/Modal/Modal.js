
export const Modal = ({ setModalOn,setChoice }) => {

    const handleCancelClick=()=>{
        setModalOn(false)
        setChoice(false)
    }

    const handleOkClick = ()=>{
        setChoice(true);
        setModalOn(false)
    }

  return (
    <div className="bg-black opacity-95 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-12 px-24 border rounded-xl">
          <div className="mb-5">
            <h3 className="text-2xl font-bold">Eliminar</h3>
            <hr className="bg-[#FF6600]" />
          </div>
          <div className="flex text-lg text-black mb-10">
            <p>¿Estás seguro de eliminar este elemento?</p>
          </div>
          <div className="flex justify-center">
            <button
              className="border rounded-md bg-[#FF6600] text-white w-28"
              onClick={handleOkClick}
            >
              Si
            </button>
            <button
              className="border rounded-md text-white bg-red-600 w-28"
              onClick={handleCancelClick}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
