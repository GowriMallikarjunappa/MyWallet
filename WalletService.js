import axios  from "axios";
const Wallet_Base_Rest_url='http://localhost:1111';
class WallerService{
    getwallets(){
        return axios.get(Wallet_Base_Rest_url)
    }
    createwallet(wallet)
    {
        return axios.post(Wallet_Base_Rest_url,wallet)
    }
    getwalletbyid(){
        return axios.post(Wallet_Base_Rest_url,walletid)
    }
    updatewallet(walletid,wallet){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +walletid, wallet);
    }

    deletewallet(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + walletid);
    }
}
export default new WallerService();