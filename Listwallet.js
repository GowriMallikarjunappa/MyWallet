import React, {useEffect, useState} from 'react'
import WalletService from '../Services/WalletService'
import { Link } from 'react-router-dom'
 const Listwallet = () => {

    
   const [wallets, setwallets] = useState([])
   useEffect(()=> {

    getwallets();
    },[])
    const getwallets=()=>{WalletService.getwallets().then((response)=>{
        setwallets(response.data)
        console.log(response.data);
        }).catch(error =>{
        
            console.log(error);
        })

    }

    const deletewallet= (walletid) => {
        WalletService.deleteEmployee(walletid).then((response) =>{
         getwallets();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }


     return (
        <div className = "container">
            <h2 className = "text-center"> List of Wallets </h2>
            <Link to ="/add-wallet" className="btn btn-primary mb-2" > Add Wallet </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Wallet Id </th>
                    <th>  Name </th>
                    <th> Description</th>
                    <th> Type </th>
                    <th> Balance </th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        wallets.map(
                            wallet=>
                            <tr key = {wallet.id}> 
                                <td> {wallet.id} </td>
                                <td> {wallet.name} </td>
                                <td>{wallet.desc}</td>
                                <td>{wallet.type}</td>
                                <td>{wallet.balance}</td>
                              
                                <td>
                                    <Link className="btn btn-info" to={`/edit-wallet/${wallet.id}`} >Update</Link></td>
                                    <button className = "btn btn-danger" onClick = {() => deletewallet(wallet.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
                }
export default Listwallet