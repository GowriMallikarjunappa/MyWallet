import React, { useEffect, useState } from 'react'
import{Link,useParams} from 'react-router-dom' ;
import { useHistory } from 'react-router-dom';
import WalletService from '../Services/WalletService'
const AddWallet = () => {
    const [wallet, setwallets] = useState('')
    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const history =useHistory();
    const id =useParams();
    const saveOrUpdateWallet = (e) => {
        e.preventDefault();

        const wallet= {name, wallet, desc}
        if(id){
            WalletService.updatewallet(id, wallet).then((response) => {
                history.push('/wallets')
            }).catch(error => {
                console.log(error)
            })

        }else{

    WalletService.createwallet(wallet).then((response)=>{
        console.log(response.data)
history.push('/wallets');

    }).catch(error=>{
        console.log(error)
    })}}
    useEffect(()=>{
        WalletService.getwalletbyid(id).then((response)=>{
            setname(response.data.name)
            setwallet(response.data.wallet)
            setdesc(response.data.desc)
        }).catch(error=>{
            console.log(error)
    })
},[])

const title = () => {

    if(id){
        return <h2 className = "text-center">Update Wallet</h2>
    }else{
        return <h2 className = "text-center">Add Wallet</h2>
    }
}
    return (
        <div> 
        <div className = "container">
        <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
                {
                    title()
                }
            <div className="card-body">
                <form>
                    <div className="form-group mb-2">
                        <label className="form-label"> First Name :</label>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange = {(e) => setname(e.target.value)}
                        >
                        </input>
                        </div>
                        <div className="form-group mb-2">
                        <label className="form-label"> Wallet Name :</label>
                        <input
                            type="text"
                            placeholder="Enter Wallet"
                            name="wallet"
                            className="form-control"
                            value={wallet}
                            onChange = {(e) => setwallets(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label"> Description :</label>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            name="desc"
                            className="form-control"
                            value={desc}
                            onChange = {(e) => setdesc(e.target.value)}
                        >
                        </input>
                        </div>

<button>
<button className = "btn btn-success" onClick = {(e) => saveOrUpdateWallet(e)} >Submit </button>
</button>

<Link to='/wallets' className='btn btn-danger'> cancel</Link>

                    </form>
                    </div>
                    </div>
                    
            </div>
            </div>
            </div>

            )
            }

            export default AddWallet