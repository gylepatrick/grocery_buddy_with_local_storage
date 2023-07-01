import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import GroceryItem from './GroceryItem'
import GroceryInput from './GroceryInput'

const Grocery = () => {
    // state for the item or for the input
    const [item, setItem] = useState("")
    const [error, setError] = useState(false)
    const [addSuccess, setAddSuccess] = useState(false)
    // state for the list of items
    const [groceryItem, setGroceryItem] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")

        if (localValue == null) return []

        return JSON.parse(localValue)
    })


    const handleAddItem = () => {
        if (item !== "") {
            setGroceryItem([...groceryItem, { id: uuid(), name: item }]);
            setItem("")
            setError(false)
        } else {
            setError(true)
        }
    }

    // save items to local storage
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(groceryItem))
    }, [groceryItem])

    const handleEditItem = (id, newItem) => {
        const updateGroceryItem = groceryItem.map((item) => {
            if (item.id === id) {
                return { ...item, name: newItem }
            }

            return item
        })

        setGroceryItem(updateGroceryItem)
    }


    const deleteItem = (id) => {
        const filteredItems = groceryItem.filter((item) => item.id !== id)
        setGroceryItem(filteredItems)
    }

    const clearItem = () => {
        setGroceryItem([])
    }


    return (
        <div className='grocery-buddy'>
            <h1>Task Buddy</h1>
            <div className="input-section">
                <GroceryInput handleAddItem={handleAddItem} item={item} setItem={setItem} />
                <span className='error-message'>{error && "Please fill the input field!"}</span>
            </div>
            <ul className="grocery-list">
                {groceryItem.map((item) => {
                    return <GroceryItem
                        key={item.id}
                        items={item}
                        handleEditItem={handleEditItem}
                        deleteItem={deleteItem}
                    />

                })}
            </ul>
            {groceryItem.length > 0 ?
                (<button onClick={clearItem} className='btn-clear'>Clear All</button>) : null
            }


        </div >
    )
}

export default Grocery