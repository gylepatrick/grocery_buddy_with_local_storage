import React, { useState } from 'react'

const GroceryItem = ({ items, handleEditItem, deleteItem }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newItem, setNewItem] = useState(items.name)

    const onEdit = () => {
        // handle edit item
        handleEditItem(items.id, newItem)
        setIsEditing(false)
    }

    return (
        <>
            <li>
                {isEditing ? <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} /> : <span>{items.name}</span>}

                <div>
                    <button onClick={() => { isEditing ? onEdit() : setIsEditing(true) }} className='btn-edit'>{isEditing ? "Save" : "Edit"}</button>
                    <button onClick={() => deleteItem(items.id)} className='btn-delete'>Delete</button>
                </div>
            </li>
        </>
    )
}

export default GroceryItem