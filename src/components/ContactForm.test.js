import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('inputs are visible', () => {
    const { getByText } = render(<ContactForm />);
    const fNameInput = getByText (/First Name*/i);
    expect(fNameInput).toBeVisible();
    const lNameInput = getByText (/Last Name*/i);
    expect(lNameInput).toBeVisible();
  
});


test("contact form submits", () => {
    const {getByLabelText, getByTestId } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);



    fireEvent.change(firstNameInput, {
        target: {name: "firstName", value: "Col" },
    });
    fireEvent.change(lastNameInput, {
        target: {name: "lastName", value: "Wilkison" },
    });
    fireEvent.change(emailInput, {
        target: {name: "email", value: "wilkison.cole@gmail.com" },
    });
    fireEvent.change(messageInput, {
        target: {name: "message", value: "plays with friends" },
    });


    expect(firstNameInput.value).toBe("Col");
    expect(lastNameInput.value).toBe("Wilkison");
    expect(emailInput.value).toBe("wilkison.cole@gmail.com");
    expect(messageInput.value).toBe("plays with friends");


    //use button
    fireEvent.click(getByTestId(/submit/i));

    //assert contact added
    // const contactText = getByTestId('Col');
    // expect(contactText).toBeInTheDocument();

})
