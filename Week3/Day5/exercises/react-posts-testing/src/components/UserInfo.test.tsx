/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* import React from 'react' */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserInfo from './UserInfo'

/* eslint-enable */

describe('Display UserInfo', () => {
  it('should render the user\'s name', () => {
    // todo
    const user = {
      name: "Ravi",
      avatarUrl: 'https://robohash.org/Fiona?size=60x60',
    }
    render(<UserInfo user={user} />);

    const foundElement = screen.getByText(/Rav/)
    expect(foundElement).toHaveTextContent("Ravi")
  })

  it("should render the user's avatar image with the correct URL", () => {
    // todo
    const user = {
      name: "Ravi",
      avatarUrl: "https://robohash.org/Fiona?size=60x60",
    };
    render(<UserInfo user={user} />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });


})
