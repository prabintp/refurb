import React from 'react';
import styles from './searchFilter.module.css'

export default function SearchAndFilter({value,search,filter}){
    return(
        <div className={styles.searchWrapper}>
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className={styles.search}
                            placeholder="Search for Products..."
                            value={value}
                            onChange={search}
                        />
                    <div className={styles.select}>
                        <select
                            onChange={filter}
                            className={styles.selectField}
                            aria-label="Filter Products By Category"
                        >
                            <option value="All">All Category</option>
                            <option value="Mobile Phones">Mobile Phones</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Home Appliances">Home Appliances</option>
                            {/* <option value="womenwear">Womens clothing</option> */}
                        </select>
                        <span className={styles.focus}></span>
                    </div>
        </div>
    )
}