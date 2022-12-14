import { data } from 'autoprefixer';
import {useEffect,useState} from 'react'
import { CardInfo } from '../../components/CardInfo/CardInfo';
import { Navbar } from '../../components/Nav/Navbar'
import { Table } from '../../components/Table/Table';
import {getChildren} from '../../utils/requests'

export const Dashboard = () => {
  const [data,setData] = useState([])
  const getUsers = async()=>{
    const resp = await getChildren();
    setData(resp.data)
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="flex">
      <div className="h-screen w-1/6">
        <Navbar />
      </div>
      <div className="flex-1">
        <div className="mx-auto w-4/3">
          <CardInfo total={data.length} />
        </div>
        <div className="">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}
