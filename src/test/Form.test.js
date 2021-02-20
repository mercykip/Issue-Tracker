//test if the search field is working
import React from 'react';
import {render, fireEvent, queryByText, waitForDomChange} from '@testing-library/react';
import SearchBar from '../SearchBar';
//check if it correctly runs through the component


it("renders correctly", () => {
    const { queryByTestId, queryByPlaceholderText} = render (<SearchBar/>)
    expect(queryByTestId("search-button")).toBeTruthy()
    expect(queryByPlaceholderText("search")).toBeTruthy()
   
})
//check if input values changes
describe("Input value", ( ) => {
    it("updates on change", ( ) => {
        const {queryByPlaceholderText} = render(<SearchBar/>)
        const searchInput = queryByPlaceholderText('search');
        fireEvent.change(searchInput, {target: {value: 'test'}})
       
        expect(searchInput.value).toBe('test');

    })
})