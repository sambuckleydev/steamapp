"use client";

import styles from "./Search.module.scss";
import React, {useState} from "react";
import { SearchProps } from "./types";
import Image from "next/image";

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('76561197960434622'); // 76561197960434622 Test ID

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchInputWrapper}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter Steam ID"
                />
                <button className={styles.searchButton}>
                    <Image src="/icon-search.svg" width={42} height={42} alt="Search" />
                </button>
            </div>
        </form>
    );
};

export default Search;