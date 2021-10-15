import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react';

let testData = {
    id: 'abcd',
    headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: '01/01/2021',
    author: "",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."
}


test('renders component without errors', () => {
    render(<Article article={testData} />);
});

test('renders headline, author from the article when passed in through props', () => {
    render(<Article article={testData} />);

    const headline = screen.getByTestId('headline');
    const author = screen.getByTestId('author');

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
    testData = { ...testData, author: '' }

    render(<Article article={testData} />);

    const author = screen.getByTestId('author');

    expect(author.textContent).toBe("By Associated Press");
});

test('executes handleDelete when the delete button is pressed', () => {
    const handleDelete = jest.fn();

    render(<Article article={testData} handleDelete={handleDelete} />);

    const deleteButton = screen.getByTestId('deleteButton');
    userEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledTimes(1);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.