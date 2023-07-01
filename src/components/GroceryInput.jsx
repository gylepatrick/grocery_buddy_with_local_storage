import React from 'react'

const GroceryInput = ({ handleAddItem, item, setItem }) => {
    return (
        <div>
            <div className="input-container">
                <input
                    type='text'
                    name='item'
                    placeholder='Item ...'
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
                <span></span>
                <button className='btn-add' onClick={handleAddItem} >Add To List</button>
            </div>
        </div>
    )
}

export default GroceryInput