
import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react'
import axios from 'axios'
// import PunkList from './components/PunkList';
import CollectionCard from './components/CollectionCard';
// import { useNFTCollection } from '@thirdweb-dev/react'




function App () {
  // const [punkListData, setPunkListData] = useState([])
  //  useEffect(() => {
  //     const getMyNfts = async () => {
  //       const openseaData = await axios.get(
  //         'https://testnets-api.opensea.io/assets?asset_contract_address=0x219184B104702C19e01290b30Ce07D362a89732e'
  //       )
  //       console.log(openseaData.data.assets)
  //       setPunkListData(openseaData.data.assets)
  //     }

  //       return getMyNfts()
  //  }, [])
  
  
  return (
   <div className='app'>
     <Header />
    <CollectionCard id={0}
     name={'Bandana Punk'}
      traits={[{value:7}]} 
    image='https://avatars.githubusercontent.com/u/103533980?v=4' />  
     
     </div>
  )
}

export default App;
