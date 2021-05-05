import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPurchaseData} from '../actions/purchaseActions'

const Details = () => {
    const state = useSelector(state => state);
    const calculateRewards = () => {
        const total = state.data.map(item => item.price).reduce((prev, next) => prev + next);
        let getRewards = 0;
        if(total > 50 && total < 100) {
            getRewards = total - 50
        } else if(total > 100){
            getRewards = (total - 100) * 2 + 50
        }
        alert(`You have ${getRewards} reward points.`)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect hook')
        dispatch(fetchPurchaseData())
    }, []);
    return (
        <>
            {state.loading ? <div>Loading</div>
                 : state.data.map((items) => <div key={items.id}>
                    <div>{items.date} {items.price}</div></div> )}

            <button onClick={calculateRewards}>Get Rewards</button>
           
        </>
    )
}

export default Details
